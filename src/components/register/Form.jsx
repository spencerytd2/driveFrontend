import React, { useState, useEffect, useRef } from "react";

import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { toast } from "react-toastify";
import { register } from "stores/reducers/auth";
import Spinner from '../loader/Spinner'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeForm from "./StripeForm";

const GENDER_VALUE = {
  MALE: "male",
  FEMALE: "female",
};

const RegisterForm = () => {
  const stripeRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);
  const [searchParams] = useSearchParams();
  const loading = useSelector((state) => get(state, "authStore.loading"));
  const isRegister = useSelector((state) => get(state, "authStore.isRegister"));
  const isLogin = useSelector((state) => get(state, "authStore.isLogin"));
  const error = useSelector((state) =>
    get(state, "authStore.errors.register.message")
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: GENDER_VALUE.MALE,
    birthday: ''
  });

  const [stripePromise, setStripePromise] = useState(() => loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY))

  useEffect(() => {
    if (!!isLogin) {
      window.location.href = "/registered";
    }
  }, [isLogin]);
  useEffect(() => {
    if (!!isRegister) {
      toast.success("Successfully! Please check email to verify your account");
      setFormData({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        gender: GENDER_VALUE.MALE,
        birthday: ''
      });
      navigate("/registered");
    }
  }, [isRegister]);
  const handleChanges = () => {
    setChecked(!checked);
  };
  const handleStripeCallback = ({ name_on_card, payment_method_id }) => {
    console.log('in handleStripeCallback', { name_on_card, payment_method_id })
    const referral = searchParams.get("r");
    dispatch(
      register({
        ...formData,
        ...(referral && { userId: referral }),
        name_on_card, payment_method_id
      })
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    stripeRef.current.createPaymentMethod()
    const referral = searchParams.get("r");
    
    if(!formData.payment_method_id){
      return
    }
    console.log('in handleSubmit', formData)
    // 
    dispatch(
      register({
        ...formData,
        ...(referral && { userId: referral }),
      })
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl m-auto">
      <div
        className="bg-[#fff] rounded-[10px] md:px-[57px] md:py-[65px] px-[30px] py-[40px] border border-[#00000020]"
        style={{ boxShadow: "0px 8px 20px 0px rgb(0 0 0 / 15%)" }}
      >
        <h3 className="text-[#283d50] font-medium text-2xl mb-10">Join Now</h3>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="text-[#05d54a] mb-4 text-center border border-[#05d54a] p-1 rounded bg-[#05d54a]/[.06]">
              Successfully! Please check email to verify your account
            </div>
          )}
          {error && (
            <div className="text-[#ff6600] mb-4 text-center border border-[#ff6600] p-1 rounded bg-[#ff6600]/[.06]">
              {error}
            </div>
          )}
          <div className="grid grid-cols-2 gap-7 registerForm">
            <div className="">
              <label className="flex w-full mb-1 text-base font-medium label">
                First Name
              </label>
              <input
                className="form-input"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <label className="flex w-full mb-1 text-base font-medium label">
                Last Name
              </label>
              <input
                className="form-input"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            {/* <div className="">
							<label className="flex w-full mb-1 text-base font-medium label">Birthday</label>
							<input className="form-input" type="date" name="birthday" onChange={handleChange} value={formData.birthday} max={moment().format('YYYY-MM-DD')} required />
						</div> */}
            {/* <div className="">
							<label className="flex w-full mb-1 text-base font-medium label">Gender</label>
							<div className="pt-3">
								<label className="mr-4 radio-container">
									<input type="radio" value={GENDER_VALUE.MALE} checked={formData.gender === GENDER_VALUE.MALE} name="gender" className="mr-1" onChange={handleChange} />
									Male
								</label>

								<label className="radio-container">
									<input type="radio" checked={formData.gender === GENDER_VALUE.FEMALE} value={GENDER_VALUE.FEMALE} name="gender" className="mr-1" onChange={handleChange} />
									Female
								</label>
							</div>
						</div> */}
            <div className="">
              <label className="flex w-full mb-1 text-base font-medium label">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <label className="flex w-full mb-1 text-base font-medium label">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <label className="flex w-full mb-1 text-base font-medium label">
                Gender
              </label>
              <div className="pt-3">
                <label className="mr-4 radio-container">
                  <input
                    type="radio"
                    value={GENDER_VALUE.MALE}
                    checked={formData.gender === GENDER_VALUE.MALE}
                    name="gender"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Male
                </label>

                <label className="radio-container">
                  <input
                    type="radio"
                    checked={formData.gender === GENDER_VALUE.FEMALE}
                    value={GENDER_VALUE.FEMALE}
                    name="gender"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
          <Elements stripe={stripePromise}>
            <StripeForm parentCallback = { handleStripeCallback } ref = { stripeRef } />
          </Elements>
          <div className="pt-4 text-base">
            <input type="checkbox" checked={checked} onChange={handleChanges} />{" "}
            By Creating An Account You Are Agreeing To Our{" "}
            <Link to="/privacy-policy">Privacy Policy</Link> And
            <Link to="/terms-of-service"> Terms Of Service</Link>.
          </div>
          
          <div className="mt-4">
            {!checked ? <span style={{ color: "red" }}>Please agree Terms and Conditions</span> : <span></span>}
          </div>
          <div className="pt-9">
            {!checked ? <button className="btn primary" style={{ cursor: "not-allowed" }} type="submit" disabled={true}>
            Create Account
            </button> : <button className="btn primary" style={{ cursor: "pointer" }} type="submit" disabled={loading}>
              {loading?  <Spinner></Spinner> :'Create Account'}
            </button>}
          </div>
            
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;