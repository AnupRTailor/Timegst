import React from 'react'
import logo17 from "./logo.png";
import 'font-awesome/css/font-awesome.min.css';
import './footer.css'

const Footer = () => {
    return(
        <section class="Footer"> 
            <div className="logoDiv2">
                <img src={logo17} class="i1" alt='' width="150px" />
                    <h6> A unique and powerful software </h6>
                    <h6> for GST billing, Inventory & </h6>
                    <h6>  Accounting. Designed for all </h6>
                    <h6> types of businesses. </h6>
                    <i className="fa fa-linkedin my-icon larger-icon" aria-hidden="true"></i>
                    <i className="fa fa-twitter my-icon larger-icon1" aria-hidden="true"></i>
                    <i className="fa fa-skype my-icon larger-icon2" aria-hidden="true"></i>
            </div>
          
        <div class="Address">
            <h5 class="OA">Our Address</h5>
            <i className="fa fa-phone-square my-icon larger-icon3" aria-hidden="true">     <span>  + 91 9886771395 </span></i>      <br/> 
            <i className="fa fa-envelope my-icon larger-icon3" aria-hidden="true">     <span>  support@timegst.com </span></i>      <br/>
            <i className="fa fa-map my-icon larger-icon3" aria-hidden="true">     <span>  Surat India </span></i>
            <address class="add">                           
                    H15, Shankheshwar Complex,                  <br/>
                    Opp. S.M.C Pay & Park,                       <br/>
                    Kailashnagar,                                <br/>
                    Majuragate, Surat,                           <br/>
                    Gujarat-395002              
            </address>
        </div>

        <div class="QuickLinks">
            <h5 class="QL">Quick Links</h5>
            <div class="link1">
                <li className="navItem">
                <a href="#" className="navLink1">
                    Home
                </a>
                </li>
                <li className="navItem">
                <a href="#" className="navLink1">
                    About Us
                </a>
                </li>
                <li className="navItem">
                <a href="#" className="navLink1">
                    Features
                </a>
                </li>
                <li className="navItem">
                <a href="#" className="navLink1">
                    Pricing
                </a>
                </li>
                <li className="navItem">
                <a href="#" className="navLink1">
                    Privacy Policy
                </a>
                </li>
                <li className="navItem">
                <a href="#" className="navLink1">
                    Terms
                </a>
                </li>
            </div>

            <div class="link2">
                <li className="navItem">
                <a href="#" className="navLink1">
                    Invoice Generator
                </a>
                </li>
                <li className="navItem">
                <a href="#" className="navLink1">
                    FAQ
                </a>
                </li>
                <li className="navItem">
                <a href="#" className="navLink1">
                    Contact
                </a>
                </li>
            </div>

        </div>

        <div class="last">
            <h6 class="run">  Run your entire business on <br/> Time GST with our unified <br/> cloud software. <br/>
                                <a href="https://timegst.com/index#pricing">timegst.com</a> </h6>
            
            <h2 class="date">Time GST - Nov 23, 2021</h2>
        </div>

        <div class="footer-bottom">
           <h5 class="copy">© copyright <a href="https://timegst.com/index">timegst.com</a> 2011-2024</h5>
        </div>
        </section>

      
    )
}

export default Footer
