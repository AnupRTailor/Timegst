import React, { useState } from "react";
import "./Price.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Price = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    console.log("Toggling accordion with index:", index);
    setActiveIndex(activeIndex === index ? null : index);
    console.log("Active index:", activeIndex);
  };


  return (
    <div className="contact-area pt-100 pb-70">
         <Navbar> </Navbar>
      <div className="container">
        <div className="row">
          <div className="price1">
                <div className="price2"> Already a customer? <a href="/Pages/Login">Click here</a> to login</div>           
          </div>

          <h2 className="price4">Billing Details</h2>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <div className = "price3">
          
          <form>
                <label htmlFor="company_name" className="price5">Company Name</label><span class="text-danger">*</span><br/>
                <input type="name" id="company_name" name="company_name" className="company_name"/><br/><br/>

                <label htmlFor="first_name"  className="price6">First Name</label><span class="text-danger">*</span><br/>
                <input type="name" id="first_name" name="first_name" className="first_name"/><br/><br/>

                <label htmlFor="last_name" className="price7">Last Name</label><span class="text-danger d1">*</span><br/>
                <input type="name" id="last_name" name="last_name" className="last_name"/><br/><br/>

                <label htmlFor="email" className="price8">Email Address</label><span class="text-danger">*</span><br/>
                <input type="email" id="email" name="email" className="email"/><br/><br/>

                <label htmlFor="phone" className="price9">Phone</label><span class="text-danger">*</span><br/>
                <input type="tel" id="phone" name="phone" className="phone"/><br/><br/>

                <label htmlFor="order_notes"  className="price10">Order Notes</label><span class="text-danger">*</span><br/>
                <textarea id="order_notes" name="order_notes" className="order_notes" rows="4" cols="50"  placeholder="Write your notes here..."></textarea><br/><br/>

              </form>

          </div>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <h2 className="price11">Coupon Code</h2>
          <form className="price12">
            <label htmlFor="coupon_code" className="price13">Enter your coupon code if you have one:</label><br/><br/>
            <div className="input-group">
              <input type="name" id="coupon_code" className="coupon_code" name="coupon_code" placeholder="Coupon Code"/>
              <button className="apply">Apply</button>
            </div>
          </form>

{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <h2 className="price14">Your Order</h2>
          <div className="price15">
         
            <table className = "price16">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Life time Unlimited</td>
                  <td>18000.00</td>
                </tr>
                <tr>
                  <td className="price17">Order Total</td>
                  <td className="price17">18000.00</td>
                </tr>
              </tbody>
            </table>

            <div className="accordion1">
            <div className="accordion-header1" onClick={() => toggleAccordion(1)}>
            Debit Card or Credit Card
            </div>
            {activeIndex === 1 && (
              <div className="accordion-content1">
              <div className="payment-options">
                <input class= "form-check-input" type="radio" id="debitCard" name="paymentMethod" value="debitCard"/>
                <label htmlFor="debitCard" className="price18">Pay With Your Debit Card Or Credit Card</label><br/>
              </div>
            </div>
            )}
          </div>

          <div className="accordion1">
            <div className="accordion-header1" onClick={() => toggleAccordion(2)}>
            UPI or Net Banking
            </div>
            {activeIndex === 2 && (
              <div className="accordion-content1">
              <div className="payment-options">
                <input class= "form-check-input" type="radio" id="debitCard" name="paymentMethod" value="debitCard"/>
                <label htmlFor="debitCard" className="price19">Pay With Your UPI App Google Pay , Phone Pe , Paytm and more</label><br/>
              </div>
            </div>
            )}
          </div>

          <div className="accordion1">
            <div className="accordion-header1" onClick={() => toggleAccordion(3)}>
            Pay Cash
            </div>
            {activeIndex === 3 && (
               <div className="accordion-content1">
               <div className="payment-options">
                 <input class= "form-check-input" type="radio" id="debitCard" name="paymentMethod" value="debitCard"/>
                 <label htmlFor="debitCard" className="price19">This Option Redirect to WhatApp Chat to Chat With Our Executive</label><br/>
               </div>
             </div>
            )}
          </div>

          <button class="place-order-btn">Place Order</button>
          </div>

          
        

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        </div>
      </div>

        <Footer></Footer>
    </div>
  );
};

export default Price;

