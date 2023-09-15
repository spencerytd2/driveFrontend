import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
import { toast } from "react-toastify";

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

const StripeForm = forwardRef((props, ref) => {
	const stripe = useStripe()
	const elements = useElements()
	const [cardHolderName, setCardHolderName] = useState('')

	useImperativeHandle(ref, () => ({
		async createPaymentMethod() {
		  console.log("child function");

			const paymentMethodObj = {
				type: 'card',
				card: elements.getElement(CardNumberElement)
			}

			const paymentMethodResult = await stripe.createPaymentMethod(paymentMethodObj)
			console.log('paymentMethodResult', paymentMethodResult)
			if(paymentMethodResult?.paymentMethod?.id){
				props.parentCallback({
					name_on_card: cardHolderName,
					payment_method_id: paymentMethodResult.paymentMethod.id
				})
			}else if(paymentMethodResult.error){
				toast.error(paymentMethodResult?.error?.message || "Payment error")
			}
			
		}
	}));
	return (
		<div className="py-4 my-4 stripe-grid px-8">
			<div className="relative flex-auto">
				<div className="sm:flex block gap-4">
					<div className="w-full mb-3">
						<label htmlFor="cc-number">
							<div className="flex flex-column items-end mb-1">
								<div className="flex items-end">Card Number
								<div className="flex ml-1 items-center gap-1">
									<div className="w-[2rem] h-[1.5rem] overflow-hidden bg-[#333] border rounded-md flex items-center bg-white">
										<img className="w-[2rem] h-[1.5rem] object-fill" src="/images/master.png" />
									</div>
									<div className="w-[2rem] h-[1.5rem] overflow-hidden bg-[#333] border rounded-md flex items-center bg-white">
										<img className="w-[2rem] h-[1.5rem] object-fill" src="/images/visa.png" />
									</div>
								</div>
								 </div>
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
								<div className="flex items-end">Name on Card&nbsp; </div>
								<div style={{ color: '#F05544' }} className="">
									*
								</div>
							</div>
						</label>
						<input
							className="form-control form-input"
							type="text"
							style={{ fontWeight: '500' }}
							placeholder="Name on Card"
							value={cardHolderName}
							onChange={(e) => setCardHolderName(e.target.value)}
							required
						/>
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
				{/* <div className="row mt-3">
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
                </div> */}
			</div>
		</div>
	)
})

export default StripeForm