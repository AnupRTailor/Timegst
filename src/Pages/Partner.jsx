import React, { useState } from "react";
import "./Partner.css";
import Navbar from "../Components/Navbar/Navbar";
import logo20 from './partner.png'
import Footer from "../Components/Footer/Footer";

const Partner = () => {
 
  return (
    <div className="contact-area pt-100 pb-70">
         <Navbar> </Navbar>
      <div className="container">
        <div className="row">
          <div className="head1">
           
          </div>
          <div className="section-title">
            <h6 className="prtn1">Fill out the form & we will get in touch with you</h6>
            <h3 className="prtn2">Join India's No. 1 Mobile Billing & Accounting Software & Earn Profits.<br/> Come be part of TimeGST Family.</h3>
            <div className="logoDiv4">
              <img src={logo20} alt="" width= "620px" />
            </div>
            <div className="prtn3">
            <form>
                <label className="pname" for="name">Name</label>                            <br/>
                <input type="text" className="pname1" id="name" name="name" placeholder="Enter Name" required/>

                <h4 className="prtn4">We'll Contact You Shortly</h4>

                <label className="pemail" for="email">Email Address</label>                 <br/>
                <input type="email" className="pemail1" id="email" name="email" placeholder="Enter Email" required/>

                <label className="pphone" for="phone">Phone Number:</label>
                <input type="tel" className="pphone1" id="phone" name="phone" placeholder="Phone Number" required/>
                
                <div className="prtn5">
                <a href="#" className="btn btn-primary1" id="previous" >Send Message</a>
                </div>
            </form>
                
            </div>
            
          </div>

          
        </div>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default Partner;