import React, { useState } from "react";
import "./InvoiceGenerator.css";
import Navbar from "../Components/Navbar/Navbar";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";

const InvoiceGenerator = () => {
  const [progressWidth, setProgressWidth] = useState('0%');
  const [activeStep, setActiveStep] = useState('details');
  const handleDownload = () => {
  };

  const handleStepClick = (width, step) => {
    setProgressWidth(width);
    setActiveStep(step);
  };

  return (
    <div className="contact-area pt-100 pb-70">
         <Navbar> </Navbar>
      <div className="container">
        <div className="row">
          <div className="head1">
           
          </div>
          <div className="section-title">
            <span className="sp-color1"></span>
            <h2 className="i1det">Free Invoice Generator</h2>
          </div>

          <div className="process-wrapper">
            <div className="progress-bar-container">
              <ul>
                <li className={`step step01 ${activeStep === 'details' ? 'active' : ''}`} onClick={() => handleStepClick('3%', 'details')}>
                  <div className="step-inner">ENTER DETAILS</div>
                </li>
                <li className={`step step02 ${activeStep === 'preview' ? 'active' : ''}`} onClick={() => handleStepClick('50%', 'preview')}>
                  <div className="step-inner">PREVIEW</div>
                </li>
                <li className={`step step03 ${activeStep === 'invoice' ? 'active' : ''}`} onClick={() => handleStepClick('100%', 'invoice')}>
                  <div className="step-inner">GET INVOICE</div>
                </li>
              </ul>

              <div className="line">
                <div className="line-progress" style={{ width: progressWidth }}></div>
              </div>
            </div>

            <div className="progress-content-section">
              {activeStep === 'details' && (
                <div className="section-content details">
                  <h2 className="Invoiceedit">ENTER DETAILS ABOUT INVOICE</h2>
                    <h5 className="comdet">Company Details</h5>
                        <h6 className="comname">Company Name</h6>
                        <input type="name" class="form-control1" id="companyname"/> 
                            <h6 className="Inno">Invoice Number</h6>
                            <div class="input-group-text">#</div> 
                            <div className="innoinput">
                               <input type="name" class="form-control2" id="invoicenumber"/>
                            </div>
                        <h6 className="comadd1">Company Address</h6>
                         <textarea id="companyaddress" placeholder="" class="form-control3"></textarea>

                        <h6 className="comlogo">Company Logo</h6>
                            <div className="innoinput1">
                                 <input type="file" class="form-control-file1" id="companylogo"/>
                            </div>

{/* -------------------------------------------------------------------------------------------------------------------------------------- */}
                            <h5 className="comdet">Customer Details</h5>
                              <h6 className="comname">Customer Name</h6>
                                <input type="name" class="form-control1" id="companyname"/> 
                                  <h6 className="Indate">Date</h6>
                            <div className="innoinput">
                                  <input type="date" class="form-control4" id="detaildate"/>
                            </div>
                              <h6 className="comadd1">Customeer Address</h6>
                              <textarea id="companyaddress" placeholder="" class="form-control3"></textarea>

                            <h6 className="duedate1">Due Date</h6>
                                <div className="innoinput1">
                                    <input type="date" class="form-control5" id="detaildate"/>
                                </div>
{/* -------------------------------------------------------------------------------------------------------------------------------- */}
                                {/* <table class="table table-bordered1">
                                  <thead>
                                    <tr>
                                      <th class="text-center">S.N.</th>
                                      <th class="text-center">Item Name</th>
                                      <th class="text-center">Quantity</th>
                                      <th class="text-center">Price</th>
                                      <th class="text-center">Amount</th>
                                      <th class="text-center">Remove</th>
                                    </tr>
                                  </thead>
                                </table> */}
                                {/* <div className="ANR">
                                <a href="#" className="btn-primary7" id="previous2" >Add New Row</a> 
                                </div> */}

                                <h6 className="inclucegst">Does your invoice include GST?</h6>
                                <div class="checked">
                                    <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked/>
                                                <label class="form-check-label" for="inlineRadio1">Yes</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"/>
                                                <label class="form-check-label" for="inlineRadio1">No</label>
                                    </div>                                  
                                </div>

                                <div className="gst">
                                  <h6 className="gstper">GST %</h6>
                                      <div className="gsttxt">
                                          <input type="number" className="form-control6" min="0" style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }} />
                                      </div>
                                </div>
                                <div className="gst1">
                                    <h6 className="gsttotal">Total ₹</h6>
                                      <div className="gsttot">
                                          <label id="detailtotal" class="form-control7">0</label>
                                      </div>
                                </div>
                                {/* <div className="enternext">
                                      <a href="#" className="btn-primary6" id="previous3" >Next</a>
                                </div> */}
                                
                </div>
              )}

              {activeStep === 'preview' && (
                <div className="section-content preview">
                  <div class="card" id= "cardig">
                      <div class="card-header">
                        <h6 class="card-title"> Invoice </h6>
                      </div>
                      <div class="card-body"> 
                        <h3 class="invoice1">Invoice #</h3>
                        <h3 class="date1">Date</h3>
                        <h3 class="duedate">Due Date</h3>
                        <h3 class="invoiceto">Invoice To:</h3>
                      </div>
                      <div class="invoicetable">
                          <table class="table">
                            <thead>
                                <tr>
                                  <td class="tblnm">S.N.</td>
                                  <td class="tblnm">Item Name</td>
                                  <td class="tblnm">Quantity</td>
                                  <td class="tblnm">Price</td>
                                  <td class="tblnm">Amount</td>
                                </tr>
                            </thead>
                          </table>
                      </div>
                      <div class="invoicetable1">
                            <table class="table">
                              <thead>
                                  <tr>
                                    <td class="tblnm1">Total:</td>
                                    <td class="tblnm2">₹</td>
                                  </tr>
                              </thead>
                            </table>
                      </div>
                  </div>
                      {/* <div className="pn">
                          <a href="#" className="btn-primary5" id="previous2" >Previous</a>
                          <a href="#" className="btn-primary6" id="previous3" >Next</a>
                      </div> */}
                  
                </div>
              )}

              {activeStep === 'invoice' && (
                <div className="section-content invoice">
                      <a href="#" className="btn btn-primary" id="invoice-download" onClick={handleDownload} style={ { marginTop: '10px' , marginLeft : '10px'}} >Download PDF</a>
                      {/* <a href="#" className="btn" id="previous" >Previous</a> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
        <Main></Main>
        <Footer></Footer>
    </div>
  );
};

export default InvoiceGenerator;