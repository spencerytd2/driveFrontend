import React, { useState } from 'react'
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux'
import { createSubscription } from 'stores/reducers/user'
import { get } from 'lodash'
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
import { updateSubscriptionId } from "stores/reducers/user";
import { ScaleLoader } from 'react-spinners'
import Axios from 'config/axios';
import { toast } from 'react-toastify';
const CARD_ELEMENT_OPTIONS = {
	style: {
		base: {
			height: '26px',
			background: 'red',
			borderRadius: '3px 3px 0px 0px',
			borderBottom: '1.5px solid black',
			width: '100%'
		},
		invalid: {
			color: '#fa755a',
			iconColor: '#fa755a'
		}
	}
}
const success3dVerify = ({ userId, subscriptionId }) => {
	const payload = {
		userId,
		subscriptionId
	}
	return Axios.post('/subscription/3d-success', payload)
}
const StripeModal = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => get(state, "userStore.user"));
	const [showModal, setShowModal] = React.useState(false)
	const stripe = useStripe()
	const elements = useElements()

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [paymentOption, setPaymentOption] = useState('')
	const [errors, setErrors] = useState({
		cardHolderName: {			message: '',		status: false},
		firstName: {			message: '',		status: false},
		lastName: {			message: '',		status: false},
		
	})

	// const loading = useSelector((state) => get(state, 'userStore.loading'))
	const [loading, setLoading] = useState(false)
	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			if(!firstName) { toast.error('First name is required'); return; }
			if(!lastName) { toast.error('Last name is required'); return; }
			setLoading(true)
			const cardHolderName = `${firstName} ${lastName}`
			console.log('handleSubmit----1')
			const paymentMethodObj = {
				type: 'card',
				card: elements.getElement(CardNumberElement)
			}
			console.log('handleSubmit----2')
			const paymentMethodResult = await stripe.createPaymentMethod(paymentMethodObj)
			console.log('handleSubmit----3')
			/*dispatch(
				createSubscription({
					name_on_card: cardHolderName,
					payment_method_id: paymentMethodResult.paymentMethod.id
				})
			)*/
			if (paymentMethodResult.error) {
				console.log('handleSubmit----3.1')
				setLoading(false)
				toast.error(paymentMethodResult.error.message);
				return
			}
			console.log('handleSubmit----4', paymentMethodResult)
			const data = {
				name_on_card: cardHolderName,
				payment_method_id: paymentMethodResult.paymentMethod.id
			}
			console.log('handleSubmit----5')

			console.log('handleSubmit----6')
			const response = await Axios.post('subscription/', data);
			console.log('handleSubmit----7')
			// toast.success(response.data.message);

			if (response) {
				console.log('handleSubmit----8')
				let data = response.data.data;
				// if (data.status == "succeeded") {
				// 	console.log('handleSubmit----9')
				// 	await Axios.get('users/updatereferral');
				// 	console.log('handleSubmit----10')
				// }
				console.log('handleSubmit----11')
				if (response.data.actionRequired) {
					console.log('handleSubmit----12')
					// We perform 3D Secure authentication
					const { paymentIntent, error } = await stripe.confirmCardPayment(
						response.data.clientSecret
					);
					console.log('handleSubmit----13')
					console.log(paymentIntent)
					if (paymentIntent) {
						console.log('handleSubmit----13.1')
						await success3dVerify({
							userId: user._id,
							subscriptionId: paymentIntent.id
						})
						console.log('handleSubmit----13.2')
					}

					if (error) {
						console.log('handleSubmit----14', error)
						toast.error('Payment failed');
					}
					if (paymentIntent) {
						console.log('handleSubmit----15')
						toast.success('Payment successful');
						setShowModal(false);
						window.location.reload(true);
						await Axios.get('users/updatereferral');
					}
					console.log('handleSubmit----16')
				}

				if (data.status === 'succeeded') {
					console.log('handleSubmit----15')
					setShowModal(false);
					window.location.reload(true);
					await Axios.get('users/updatereferral');
				}
				console.log('handleSubmit----17')
			}
			console.log('handleSubmit----18')
			setLoading(false)

			return response.data;

		} catch (error) {
			setLoading(false)
			console.log('handleSubmit----19')
			if (!error.response) {
				console.log('handleSubmit----20')
				throw error;
			}
			if (error.response.data) {
				console.log('handleSubmit----21')
				toast.error(error.response.data.message.raw.message);
			}
			console.log('handleSubmit----22')
			// return rejectWithValue(error.response.data);
		}
		console.log('handleSubmit----23')
	}

	const handlePayment = (e) => {
		console.log('handlePayment----1')
		// Retrieve payment ID
		const paymentId = e.code || "paymentid";
		console.log('handlePayment----2')
		let currentUser = { ...user }
		console.log('handlePayment----3')
		if (user) {
			console.log('handlePayment----4')
			currentUser.subscriptionId = paymentId
			dispatch(updateSubscriptionId(currentUser))
		}
		console.log('handlePayment----5')

	}

	return (
		<>
			<button
				className="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				type="button"
				onClick={() => {
					setShowModal(true)
					setPaymentOption('')
				}}>
				Activate Your Account ?
			</button>
			{showModal ? (
				<>
					<div className="text-black justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto lg:w-[800px] md:w-[700px] sm:w-[600px] w-[400px]">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-2xl font-semibold text-blue-500">Payment Options</h3>
									<button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
									</button>
								</div>
								{/*body*/}
								<div className='paymentDetails'>
									<label
										className="flex items-center w-full border p-4 cursor-pointer"
										htmlFor="credit"
										onClick={() => {
											setPaymentOption('credit')
										}}>
										<div className="flex items-center gap-4">
											<input type="radio" id="credit" checked={paymentOption === 'credit'} name="payment" />
											Credit & Debit Card

											<div className="flex items-center gap-1">
												<div className="w-[2.75rem] h-[2rem] overflow-hidden bg-[#333] border rounded-md flex items-center bg-white">
													<img className="w-[3rem] h-[2rem] object-fill" src="/images/master.png" />
												</div>
												<div className="w-[2.75rem] h-[2rem] overflow-hidden bg-[#333] border rounded-md flex items-center bg-white">
													<img className="w-[3rem] h-[2rem] object-fill" src="/images/visa.png" />
												</div>
											</div>
										</div>
									</label>
									{paymentOption === 'credit' && (
										<div className="py-4 px-8">
											<div className="relative flex-auto">
												<div className="sm:flex block gap-4">
													<div className="w-full mb-3">
														<label htmlFor="cc-number">
															<div className="flex flex-column items-end mb-1">
																<div className="flex items-end">Card Number&nbsp; </div>
																<div style={{ color: '#F05544' }} className="">
																	*
																</div>
															</div>
														</label>
														<CardNumberElement id="cc-number" className="form-control form-input" options={CARD_ELEMENT_OPTIONS} />
													</div>
													<div className="w-full sm:flex block gap-4">
														<div className="sm:w-1/2 w-full mb-3">
															<label htmlFor="cc-number">
																<div className="flex flex-column items-end mb-1">
																	<div className="flex items-end">Card Expiry&nbsp; </div>
																	<div style={{ color: '#F05544' }} className="">
																		*
																	</div>
																</div>
															</label>
															<CardExpiryElement id="cc-number" className="form-control input" options={CARD_ELEMENT_OPTIONS} />
														</div>

														<div className="sm:w-1/2 w-full col-md-12 mb-3">
															<label htmlFor="cc-number">
																<div className="flex flex-column items-end mb-1">
																	<div className="flex items-end">CVC&nbsp; </div>
																	<div style={{ color: '#F05544' }} className="">
																		*
																	</div>
																</div>
															</label>
															<CardCvcElement id="cc-number" className="form-control input" options={CARD_ELEMENT_OPTIONS} />
														</div>
													</div>
												</div>
												<div className="sm:flex block gap-4">
													<div className="w-full my-3">
														<label htmlFor="cc-number">
															<div className="flex flex-column items-end mb-1">
																<div className="flex items-end">First Name&nbsp; </div>
																<div style={{ color: '#F05544' }} className="">
																	*
																</div>
															</div>
														</label>
														<input
															className={`form-control form-input ${errors.firstName.status && 'border-red-500'}`}
															type="text"
															style={{ fontWeight: '500' }}
															placeholder="First Name"
															name="First Name"
															value={firstName}
															onChange={(e) => setFirstName(e.target.value)}
															required
														/>
													</div>
													<div className="w-full my-3">
														<label htmlFor="cc-number">
															<div className="flex flex-column items-end mb-1">
																<div className="flex items-end">Last Name&nbsp; </div>
																<div style={{ color: '#F05544' }} className="">
																	*
																</div>
															</div>
														</label>
														<input
															className={`form-control form-input ${errors.lastName.status && 'border-red-500'}`}
															type="text" style={{ fontWeight: '500' }}
															onChange={(e) => setLastName(e.target.value)}
															placeholder="Last Name" name="Last Name" required />
													</div>
												</div>
												<div className="row mt-3 w-full">
													<div className="flex items-center gap-2">
														<input type="checkbox" id="saveAsDefault" />
														<label className="flex items-center gap-2" htmlFor="saveAsDefault">
															save as default <QuestionMarkCircleIcon className="w-[1.2rem]" />
														</label>
													</div>
												</div>
												<div className="row mt-3">
													<div className="col-md-12 flex justify-end">
														<button
															className={`bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${loading && 'opacity-50 pointer-none'
																}`}
															type="button"
															disabled={loading}
															onClick={handleSubmit}>
															{loading ? <ScaleLoader className='ld' color='#36d7b7' /> : "Confirm and pay"}
														</button>
													</div>
												</div>
											</div>
										</div>
									)}
								</div>
								<div className='paymentDetails'>
									<label
										className="flex items-center w-full border p-4 cursor-pointer"
										htmlFor="crypto"
										onClick={() => {
											setPaymentOption('crypto')
										}}>
										<div className="flex gap-4">
											<input type="radio" id="crypto" name="payment" checked={paymentOption === 'crypto'} />
											Pay with Crypto
										</div>
									</label>
									{paymentOption === 'crypto' && (
										<div className="py-4 px-8">
											<div className="relative p-6 flex-auto">
												<div className="row">
													<div className="col-md-12 mb-3">
														<p className="text-center">
															<div>
																<CoinbaseCommerceButton
																	className="coinbase-commerce-button px-4"
																	checkoutId='e59b31a3-8ddb-4d8d-ada1-f60d134b31b5'
																	// checkoutId='9a3f6b8f-9c42-466d-a061-0711391fe0ec'
																	onPaymentDetected={handlePayment}
																	onChargeSuccess={handlePayment}
																>
																	Pay Now

																</CoinbaseCommerceButton>
															</div>
														</p>
													</div>
												</div>
											</div>
										</div>
									)}
								</div>

								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	)
}

export default StripeModal