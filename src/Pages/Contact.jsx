import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../Components/Navbar/Navbar";
import ReCAPTCHA from 'react-google-recaptcha';
import logo2 from './contact.png'
import Footer from "../Components/Footer/Footer";

const Contact = () => {

   const [recaptchaValue, setRecaptchaValue] = useState(null);
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };
  const handleSubmit = () => {
    if (recaptchaValue) {
      console.log('Form submitted successfully!');
    } else {
      console.error('reCAPTCHA validation failed.');
    }
  };
  return (
    <div className="contact-area pt-100 pb-70">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="section-title">
          
            <div className="Contact1">
                <h5 className="Con1">FREE QOUTE AND MESSAGE US</h5>
                <h2 className="Con2">We believe in delivering the best results on every <br/> project with 10 years of experience</h2>
                <h3 className="Con3">Thank you for your interest in Time GST and our Services. Please fill out the form below and we will get back to you promptly regarding your request.</h3>
            </div>
            <form id="contactForm">
              <label className="name" for="name" >Name </label>
              <input type="name" className="name1" name="name" required/>             <br/> 

              <label className="email1" for="email">Email</label>
              <input type="email" className="email2" name="email" required/>           <br/>

              <label className="mobile" for="mobile">Mobile</label>
              <input type="tel" className="mobile1" name="mobile" required/>          <br/>

              <label className="subject" for="subject">Subject</label>
              <input type="name" className="subject1" name="subject" required/>         <br/>

              <label className="message" for="message">Message</label>
              <textarea className="message1" name="message" rows="4" required/>       <br/>

              <label className="captcha" for="captcha">Captcha</label>
              <div className="recaptcha">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleRecaptchaChange}
              />
              </div>
                     
              <div className="con4">
                  <a href="#" className="btn btn-primary1" id="previous" >Send Message</a>
              </div>
             
            </form>
            <div className="logoDiv3">
              <img src={logo2} alt="" width= "600px" />
            </div>
           
          </div>
         
            
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
