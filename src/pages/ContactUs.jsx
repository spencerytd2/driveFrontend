import React from "react";
import { useState } from "react";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [data,setData]=useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })
  const sendMessage=()=>{
    console.log(data)
    toast.success("Message sent successfully")
  }
  return (<>
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center pt-16 gap-5">
        <div className="">
          <h2 className="text-[#000] font-light  text-3xl mb-3 pt-7"><span className="font-semibold">Contact</span> Us</h2>
          <div className="text-[#777]">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center pt-5 gap-10 ">
              <div class="col-lg-6">
                <p><label for="contact-name">Your name *</label>
                  <input size="40" class=" mt-1 form-control"  value={data.name} onChange={(event)=>{setData({...data,name:event.target.value})}} type="text" />
                </p>
              </div>
              <div class="col-lg-6">
                <p><label >Your email address *</label>
                  <input size="40" class=" mt-1 form-control" value={data.email} onChange={(event) => { setData({ ...data, email: event.target.value }) }} type="email"  />
                </p>
              </div>
              <div>
              </div>
            </div>
            <div class=" pb-5">
              <p><label >Subject</label>
                <input size="40" class=" mt-1 form-control" value={data.subject} onChange={(event) => { setData({ ...data, subject: event.target.value }) }} type="text"/>
              </p>
            </div>
            <div>
              <p><label >Your Message</label>
                <textarea rows="20" class="form-control" style={{ minHeight: "150px" }} value={data.message} onChange={(event) => { setData({ ...data, message: event.target.value }) }}></textarea>
              </p>
            </div>
          </div>
          <button className="b-1 bg-[#3B82F6] text-white py-2 px-3 font-bold text-sm mt-8" onClick={() => sendMessage()}>Send Message</button>
        </div>
        <div className="text-[#777]">
          <div className="border-b-2 text-sm">
            <h4 className="text-[#01abec] mb-3 font-bold text-base">The Office</h4>
            <div className="flex  align-center flex-row items-center mb-5 gap-4">
              <div className="w-7 h-7 flex justify-center align-center bg-[#3B82F6] rounded-full items-center text-[#fff]"><FaMapMarkerAlt /></div>
              <h3 className="text-sm"><span className="font-black text-base">Address:</span> 306 Wittel Ave, Opelika, AL 36804, United States</h3>
            </div>
            <div className="flex  align-center flex-row items-center mb-5 gap-4">
              <div className="w-7 h-7 flex justify-center align-center bg-[#3B82F6] rounded-full items-center text-[#fff]"><FaPhone /></div>
              <h3 className="text-sm"><span className="font-black text-base">Phone:</span> (334) 749-1096</h3>
            </div>
            <div className="flex  align-center flex-row items-center mb-5 gap-4">
              <div className="w-7 h-7 flex justify-center align-center bg-[#3B82F6] rounded-full items-center text-[#fff]"><FaEnvelope /></div>
              <h3 className="text-sm"><span className="font-black text-base">Email:</span> support@ndrive.cloud</h3>
            </div>
          </div>
          <div>
            <h4 className="text-[#01abec] mt-3 mb-3 font-bold">Business Hours</h4>
            <div className="flex  align-center flex-row items-center mb-5 gap-4">
              <div className="w-4 h-4 flex justify-center align-center border-1 rounded-full items-center bg-[#777] text-[#fff]"><FaClock /></div>
              <h3 className="text-sm">Monday - Friday 9am to 5pm</h3>
            </div>
            <div className="flex  align-center flex-row items-center mb-5 gap-4">
              <div className="w-4 h-4 flex justify-center align-center border-1 rounded-full items-center bg-[#777] text-[#fff]"><FaClock /></div>
              <h3 className="text-sm">Saturday - 9am to 2pm</h3>
            </div>
            <div className="flex  align-center flex-row items-center mb-5 gap-4">
              <div className="w-4 h-4 flex justify-center align-center border-1 rounded-full items-center bg-[#777] text-[#fff]"><FaClock /></div>
              <h3 className="text-sm">Sunday - Closed</h3>
            </div>
          </div>
        </div>
      </div>


    </div>
  </>
  );
};

export default ContactUs;
