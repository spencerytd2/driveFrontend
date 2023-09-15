import React, { useEffect, useState } from "react";
import { checkProfile } from "stores/reducers/user";
import { useNavigate } from "react-router-dom";

const RegisterComplete =  () => {
  const [message, setMessage] = useState({message: " Successfully! Please wait your payment is processing",bg:"green-200"});
  const navigate = useNavigate();
 
  useEffect(() => {
    checkProfile().then(response=>{
      if(response?.data?.paymentCompleted){
        setTimeout(() => {
          navigate("/Dashboard");
        }, 2000);
      } else if(response?.data?.message){
        setMessage({message:response?.data?.message, bg:'red-200'})
        localStorage.removeItem('tubemate_token')
      } 
      if(response?.data?.redirect_url){
        setTimeout(() => {
          window.location.href = response?.data?.redirect_url;
        }, 2000);
      }
    }).catch(()=>{
      localStorage.removeItem('tubemate_token')
      navigate("/register");
    })
  }, []);

    return (
        <div className="w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
        
        <div className={` m-6 text-center border border-${message.bg} success p-1 rounded bg-${message.bg} `}>
             {message.message}
            </div>
      </div>
    </div>
    );
};

export default RegisterComplete;