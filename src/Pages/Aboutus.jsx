import React from "react";
import logo17 from './logo1.png';
import './Aboutus.css';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt , faLayerGroup , faFileLines , faDatabase , faFileWord , faBusinessTime , faDigitalTachograph , faCreditCard , faShoppingBasket , faUniversity , faHeadset , faFileExcel} from '@fortawesome/free-solid-svg-icons';
import { faAddressCard , faArchive , faAddressBook , faBriefcase , faDesktop , faCircleDot} from '@fortawesome/free-solid-svg-icons';

const Aboutus = () => {
    return (
        <div class="contact-area pt-100 pb-70">
             <Navbar> </Navbar>
       <div class="container">
           
        <div class="row">
            <div class="section-title">
                <span class="sp-color1"></span>
                <h2 class="About1">About Us</h2>
            </div>
            <p class="about1">
            Time GST was founded by Arpit shah and his team, primarily to focus on development and marketing of business accounting software<br/>
            under the trademark of Time GST. The same was incorporated on 12th of Aug, 2020.
            </p> &nbsp;
            <p class="about1">After getting his engineering degree in 2014, Arpit spent 8 years working in different capacities in IT Industry. Being in the IT Industry environment for 8 years, he understood very early that Computers and Software could provide considerable benefits to businessmen in managing their business operations. The value proposition was evident in his mind as the adoption computers and softwares was in nascent stage in India at that time. Seeing this as an opportunity, he decided to start his own business, by the name of Time GST India, in 2020 with the focus on Computer Sales & Maintenance, and Custom Software Development.</p>&nbsp; 
            <p class="about1">This year 2021, Manish joined with him. Manish focused mainly on software development business leading to strengthening and growth of Custom Software Development business. More importantly, the exposure to understanding the requirements of so many businesses over next 2 years, led to the company gaining a good grasp of the problems faced by MSMEs. It was realised that there was a huge demand for business accounting automation from MSMEs, but they needed a product which was capable of managing not just their accounts but other business processes also, like Inventory / Invoicing / Taxation etc. This led to the creation of the first version of Time GST in September 2020.</p>&nbsp;
            <p class="about1">In the initial years, Time GST gained popularity due to its key differentiators such as Sales Tax Reports, Invoicing and Inventory etc. which were not present in the competitive softwares. Due to these differentiators, Time GST got instant acceptance not only from the Users but also from the Tax Practitioners.</p>&nbsp;
        </div>
        <div class="row align-items-center">
            <section class="my-5">
                <h2 class="of">
                    Our Features                    
                </h2>              
                <p class="ofd">
                Time GST is a powerful GST Compliant Business Accounting Software that keeps you on the top of your business <br/> by managing not just accounting but your complete business.
                </p>
                <div class="div1">
                    <FontAwesomeIcon icon={faReceipt} className="fareception" />            <h3 class="div1info">Professional GST Invoices </h3>    
                    <FontAwesomeIcon icon={faLayerGroup} className="falayer" />             <h3 class="div2info">Stock/Inventory <br/> Management </h3>  
                    <FontAwesomeIcon icon={faFileLines} className="fafilelines" />          <h3 class="div1info">Customize GST invoices</h3>
                    <FontAwesomeIcon icon={faDatabase} className="faDatabase" />            <h3 class="div1info">Auto Backup</h3>
                    <FontAwesomeIcon icon={faFileWord} className="faFileWord" />            <h3 class="div1info">Critical Business Reports</h3>
                    <FontAwesomeIcon icon={faBusinessTime} className="faBusinessTime" /> <h3 class="div1info">Business Status</h3>

                    <div className="lgDiv">
                        <img src={logo17} width="400px" />
                    </div>

                    <div class="icons">
                    <FontAwesomeIcon icon={faDigitalTachograph} className="faDigitalTachograph" /> <h3 class="div4info">Go Paperless with Time GST Software </h3>
                    <FontAwesomeIcon icon={faCreditCard} className="faCreditCard" /> <h3 class="div3info">Credit/Debit </h3>
                    <FontAwesomeIcon icon={faShoppingBasket} className="faShoppingBasket" /> <h3 class="div3info">Purchase and Sale Orders</h3>
                    <FontAwesomeIcon icon={faUniversity} className="faUniversity" /> <h3 class="div3info">Bank Accounts and cash</h3>
                    <FontAwesomeIcon icon={faHeadset} className="faHeadset" /> <h3 class="div3info">Dedicated & Free Support</h3>
                    <FontAwesomeIcon icon={faFileExcel} className="faFileExcel" /> <h3 class="div5info">Item, Party, and Product Import from Excel</h3>
                    </div>
                </div>

            </section>
{/* --------------------------------------------------------------------------------------------------------------------------------- */}
            <div class = "History">
                <h2 class="HTG">History of Time GST</h2>
                <p class="HTGdis">A brief stories of our 4 years company journey</p>     

                <div class="timeline">
                    <div class="container right-container1">
                        <small class="monthyear">2018</small> 
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faAddressCard} className="faAddressCard" /> <h6 class="month">January</h6>   
                        </div>
                        <small class="monthdis">First beta version launched for testing</small>
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faArchive} className="faArchive" /> <h6 class="month">March</h6>
                            <small class="monthdis">First cloud based version <br/> 1.0 accounting software launched for the customer</small>
                        </div>
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faAddressBook} className="faAddressBook" />    <h6 class="month">December</h6>
                            <small class="monthdis">Reached customers 100+</small>
                        </div>
                    </div>
                </div>

                <div class="timeline">
                    <div class="container right-container">
                        <small class="monthyear">2019</small>
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faBriefcase} className="faBriefcase" /> <h6 class="month">March</h6>   
                        </div>
                        <small class="monthdis">Multi Users, Multi languages feature enable</small>
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faDesktop} className="faDesktop" /> <h6 class="month">October</h6>
                            <small class="monthdis">Launched and roll out new cloud based version2.0</small>
                        </div>
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faDesktop} className="faDesktop" />    <h6 class="month">December</h6>
                            <small class="monthdis">Reached customers 250+</small>
                        </div>
                    </div>
                </div>

                <div class="timeline">
                     
                    <div class="container right-container2">
                        <small class="monthyear">2020</small>
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faBriefcase} className="faBriefcase" /> <h6 class="month">January</h6>   
                        </div>
                        <small class="monthdis">Funded by family Investors</small>
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faDesktop} className="faDesktop" /> <h6 class="month">March</h6>
                            <small class="monthdis">Launched support for mobile devices</small>
                        </div>
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faDesktop} className="faDesktop" />    <h6 class="month">September</h6>
                            <small class="monthdis">Starting working on stand alone mobile app</small>
                        </div>
                    </div>              <br/>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faDesktop} className="faDesktop" />    <h6 class="month">December</h6>
                            <small class="monthdis">Starting working on stand alone mobile app</small>
                        </div>
                    </div>
                </div>


                <div class="timeline">
                    <div class="container right-container3">
                        <small class="monthyear">2021</small>
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faAddressCard} className="faAddressCard" /> <h6 class="month">January</h6>   
                        </div>
                        <small class="monthdis">Pitching for angel fund</small>
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faArchive} className="faArchive" /> <h6 class="month">June</h6>
                            <small class="monthdis">Open Partner with us</small>
                        </div>
                    </div>
                    <div class="container1">
                        <div class="text-box">
                        <FontAwesomeIcon icon={faAddressBook} className="faAddressBook" />    <h6 class="month">December</h6>
                            <small class="monthdis">Reached customers 400+</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <Footer> </Footer>
    </div>
    
    )
}

export default Aboutus