import React, { useState, useRef, useEffect } from "react";
import TabNavItem from "../Main/TabNavItem";
import TabContent from "../Main/TabContent";
import "./main.css";
import logo from "./cloud-icon-17.png";
import logo1 from "./invoice.jpg";
import logo2 from "./layer.png";
import logo3 from "./security.jpg";
import logo4 from "./bank.jpg";
import logo5 from "./purchase.jpg";
import logo6 from "./record.png";
import logo7 from "./b1.png";
import logo8 from "./b2.jpg";
import logo9 from "./b3.png";
import logo10 from "./b4.png";
import logo11 from "./b5.png";
import logo12 from "./b6.png";
import logo13 from "./b7.png";
import logo14 from "./b8.png";
import logo15 from "./b9.png";
import logo16 from "./b10.png";
import Badge from "react-bootstrap/Badge"; 

export const Main = () => {
  const [activeTab, setActiveTab] = useState("one");

  return (
    <section className="main container section">
    <section id = "Feature">
      <div className="secTitle">
        <h3 className="title"> App Advance Features </h3>
        <p class="mnkey">
          The key features included like Financial Year Wise Accounting,
          Inventory <br /> Management, GST Billing, HRA, E-WAY Bill System,
          Payroll, Customer <br /> Management and much more.
        </p>
      </div>

      <div class="slide-container">
        <div class="slide-content">
          <div class="card-wrapper">
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src={logo} alt="" class="card-img" />
                </div>
              </div>
              <div class="card-content">
                <h2 class="name">
                  Cloud-Based <br /> Accounting
                </h2>
                <p class="description">
                  It is shaping clarity in financial <br />
                  data across multiple businesses and branches - Anyone from
                  Anywhere
                </p>
              </div>
            </div>

            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src={logo1} alt="" class="card-img" />
                </div>
              </div>
              <div class="card-content">
                <h2 class="name"> GST Invoicing / Billing </h2>
                <p class="description">
                  This is quite efficient for easily assisting the medium and
                  small and enterprises to save more time in accounting.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src={logo4} alt="" class="card-img" />
                </div>
              </div>
              <div class="card-content">
                <h2 class="name">
                  Bank Account and <br /> Cash flow
                </h2>
                <p class="description">
                  It is quite an efficient way to manage the accounts with all
                  the cash-ins and cash-outs, easily record all the
                  transactions.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src={logo6} alt="" class="card-img" />
                </div>
              </div>
              <div class="card-content">
                <h2 class="name">
                  Business <br /> Reports and Status
                </h2>
                <p class="description">
                  It is enabled with the Balance Sheet so that efficient option
                  for extensively increasing the operational efficiency of the
                  business.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src={logo2} alt="" class="card-img" />
                </div>
              </div>
              <div class="card-content">
                <h2 class="name">
                  Inventeroy <br /> Management
                </h2>
                <p class="description">
                  Quickly glance at available stock while receiving new order
                  and Prevent shortage of critical Product material
                </p>
              </div>
            </div>

            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src={logo3} alt="" class="card-img" />
                </div>
              </div>
              <div class="card-content">
                <h2 class="name">
                  Data Safety and <br /> Security
                </h2>
                <p class="description">
                  The data will be encrypted with added security. We promised
                  100% secure, and you can easily store your data accurately.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src={logo5} alt="" class="card-img" />
                </div>
              </div>
              <div class="card-content">
                <h2 class="name"> Purchase and Sale Invoice </h2>
                <p class="description">
                  Keep track the Purchase order smartly, Base on customer
                  requirements, we can customize the sale Invoice with various
                  format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
      {/* ---------------------------------------------------------------------------------------------------------------------- */}
      <hr />

      <div class="section section-work-data">
        <div class="container grid grid-four-column">
          <div>
            <h2 class="counter-numbers">450+</h2>
            <p class="nd">Business Trust us</p>
          </div>
          <div>
            <h2 class="counter-numbers">18K+</h2>
            <p class="nd">Invoice Created</p>
          </div>
          <div>
            <h2 class="counter-numbers">16+</h2>
            <p class="nd">Cities & Towns in India</p>
          </div>
          <div>
            <h2 class="counter-numbers">5+</h2>
            <p class="nd">Partners in India</p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------------- */}
    <section id="Pricing"> 
      <h2 class="plan">Choose Plans & Pricing</h2>
      <p class="plan-details">
        Time GST has been trusted by thousands of accountants from India.
        Register <br /> Now and get free access to Easy GST for 15 days. No
        Credit Card required!!!
      </p>

      <div className="Tabs">
        <ul className="nav">
          <TabNavItem title="1 year" class = "one" id="one" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="3 year" class = "three" id="th" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="5 Year" class = "five" id="five" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Life Time" class = "Lt" id="Lt" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Trial"  class = "Tl" id="Tl" activeTab={activeTab} setActiveTab={setActiveTab}/>  <Badge class = "badge">New</Badge>

        </ul>

        <div className="outlet">
          <TabContent id="one" activeTab={activeTab}>
          <div className="card1-container">
            <div class="card1">
              <h4 class="n3">Starter</h4>
              <h1 class="rp">₹2700</h1>
              <p class="info">&#10003; 2 Users    <br/>
              &#10003; 600 Sales Invoice <br/>
              &#10003; 600 Purchase Bills<br/>
              &#10003; Free Invoice Generator<br/>
              &#10003; Inventory Stock Management<br/>
              &#x2717; Customer relationship management<br/>
              &#x2717; Human Resource Management <br/>
              &#x2717; EPOS System </p>
              <form action="Price/Price">
                <div class="get">
                  <button type="submit" class="btn">Get Started</button>
                </div>
              </form>
            </div>
            <div class="card1">
              <h4 class="n3">Intermediate</h4>
              <h1 class="rp">₹3600</h1>
              <p class="info">&#10003; 5 Users      <br/>
              &#10003; 2400 Sales Invoice<br/>
              &#10003; 2400 Purchase Bills<br/>
              &#10003; Free Invoice Generator<br/>
              &#10003; Inventory Stock Management<br/>
              &#x2717; Customer relationship management<br/>
              &#x2717; Human Resource Management<br/>
              &#x2717; EPOS System</p>
           <form action="Price/Price1">
                <div class="get">
                  <button type="submit" class="btn">Get Started</button>
                </div>
              </form>
            </div>
            <div class="card1">
              <h4 class="n3">Professional</h4> 
              <h1 class="rp">₹4500</h1>
              <p class="info">&#10003; Unlimited Users  <br/>
              &#10003; Unlimited Sales Invoice<br/>
              &#10003; Unlimited Purchase Bills<br/>
              &#10003; Free Invoice Generator<br/>
              &#10003; Inventory Stock Management<br/>
              &#10003; Customer relationship management<br/>
              &#10003; Human Resource Management<br/>
              &#10003; EPOS System</p>
           <form action="Price/Price2">
                <div class="get">
                  <button type="submit" class="btn">Get Started</button>
                </div>
              </form>
            </div>
          </div>
          </TabContent>


          <TabContent id="th" activeTab={activeTab}>
            <div className="card1-container">
            <div class="card1">
              <h4 class="n3">Starter</h4>
              <h1 class="rp">₹5400</h1>
              <p class="info">&#10003; 2 Users                           <br/>
              &#10003; 600 Sales Invoice<br/>
              &#10003; 600 Purchase Bills<br/>
              &#10003; Free Invoice Generator<br/>
              &#10003; Inventory Stock Management<br/>
              &#x2717; Customer relationship management<br/>
              &#x2717; Human Resource Management<br/>
              &#x2717; EPOS System</p>
           <form action="Price/Price3">
                <div class="get">
                  <button type="submit" class="btn">Get Started</button>
                </div>
              </form>
            </div>
            <div class="card1">
              <h4 class="n3">Intermediate</h4>
              <h1 class="rp">₹7200</h1>
              <p class="info">&#10003; 5 Users      <br/>
              &#10003; 2400 Sales Invoice<br/>
              &#10003; 2400 Purchase Bills<br/>
              &#10003; Free Invoice Generator<br/>
              &#10003; Inventory Stock Management<br/>
              &#x2717; Customer relationship management<br/>
              &#x2717; Human Resource Management<br/>
              &#x2717; EPOS System</p>
           <form action="Price/Price4">
                <div class="get">
                  <button type="submit" class="btn">Get Started</button>
                </div>
              </form>
            </div>
            <div class="card1">
              <h4 class="n3">Professional</h4> 
              <h1 class="rp">₹9000</h1>
              <p class="info">&#10003; Unlimited Users  <br/>
              &#10003; Unlimited Sales Invoice<br/>
              &#10003; Unlimited Purchase Bills<br/>
              &#10003; Free Invoice Generator<br/>
              &#10003; Inventory Stock Management<br/>
              &#10003; Customer relationship management<br/>
              &#10003; Human Resource Management<br/>
              &#10003; EPOS System</p>
          <form action="Price/Price5">
                <div class="get">
                  <button type="submit" class="btn">Get Started</button>
                </div>
              </form>
            </div>
          </div>
          </TabContent>


          <TabContent id="five" activeTab={activeTab}>
            <div className="card1-container">
            <div class="card1">
              <h4 class="n3">Starter</h4>
              <h1 class="rp">₹8100</h1>
              <p class="info">&#10003; 2 Users                           <br/>
              &#10003; 600 Sales Invoice<br/>
              &#10003; 600 Purchase Bills<br/>
              &#10003; Free Invoice Generator<br/>
              &#10003; Inventory Stock Management<br/>
              &#x2717; Customer relationship management<br/>
              &#x2717; Human Resource Management<br/>
              &#x2717; EPOS System</p>
          <form action="Price/Price6">
                <div class="get">
                  <button type="submit" class="btn">Get Started</button>
                </div>
              </form>
            </div>
            <div class="card1">
              <h4 class="n3">Intermediate</h4>
              <h1 class="rp">₹10800</h1>
              <p class="info">&#10003; 5 Users      <br/>
              &#10003; 2400 Sales Invoice<br/>
              &#10003; 2400 Purchase Bills<br/>
              &#10003; Free Invoice Generator<br/>
              &#10003; Inventory Stock Management<br/>
              &#x2717; Customer relationship management<br/>
              &#x2717; Human Resource Management<br/>
              &#x2717; EPOS System</p>
          <form action="Price/Price7">
                <div class="get">
                  <button type="submit" class="btn">Get Started</button>
                </div>
              </form>
            </div>
            <div class="card1">
              <h4 class="n3">Professional</h4> 
              <h1 class="rp">₹13500</h1>
              <p class="info">&#10003; Unlimited Users  <br/>
              &#10003; Unlimited Sales Invoice<br/>
              &#10003; Unlimited Purchase Bills<br/>
              &#10003; Free Invoice Generator<br/>
              &#10003; Inventory Stock Management<br/>
              &#10003; Customer relationship management<br/>
              &#10003; Human Resource Management<br/>
              &#10003; EPOS System</p>
           <form action="Price/Price8">
                <div class="get">
                  <button type="submit" class="btn">Get Started</button>
                </div>
              </form>
            </div>
          </div>
          </TabContent>


          <TabContent id="Lt" activeTab={activeTab}>
            <div className="card2-container">
            <div class="card2">
              <h4 class="n3">Life time </h4>
              <h1 class="rp">₹18000</h1>  
              <p class="info">&#10003; Unlimited Users                 <br/>
              &#10003; Unlimited Sales Invoice          <br/>
              &#10003; Unlimited Purchase Bills<br/>
              &#10003; Free Invoice Generator<br/>
              &#10003; Inventory Stock Management<br/>
              &#10003; Customer relationship management<br/>
              &#10003; Human Resource Management<br/>
              &#10003; EPOS System</p>
           <form action="Price/Price9">
                <div class="get">
                  <button type="submit" class="btn">Get Started</button>
                </div>
              </form>
            </div>
          </div>
          </TabContent>


          <TabContent id="Tl" activeTab={activeTab}>
            <div className="card2-container">
            <div class="card2">
              <h4 class="n3">Trial </h4>
              <h1 class="rp">15 Days</h1>  
              <p class="info"> &#10003; 2 Users                         <br/>
              &#10003; 600 Sales Invoice<br/>
              &#10003; 600 Purchase Bills<br/>
              &#10003; Free Invoice Generator<br/>
              &#10003; Inventory Stock Management<br/>
              &#x2717; Customer Relationship management<br/>
              &#x2717; Human Resource Management<br/>
              &#x2717; EPOS System</p>
           <form action="Price/Price10">
                <div class="get">
                  <button type="submit" class="btn">Get Started</button>
                </div>
              </form>
            </div>
          </div>
          </TabContent>
        </div>
      </div>
    </section>
{/* ---------------------------------------------------------------------------------------------------------------------------- */}
      <div class="brand">
        <h2 class="bn">BRANDS THAT TRUST US</h2>

        <div class="image-slider-container">
          <div class="image-slide">
            <img src={logo7} class="img-fluid" />
          </div>
          <div class="image-slide">
            <img src={logo8} class="img-fluid"  />
          </div>
          <div class="image-slide">
            <img src={logo9} class="img-fluid"  />
          </div>
          <div class="image-slide">
            <img src={logo10} class="img-fluid" />
          </div>
          <div class="image-slide">
            <img src={logo11} class="img-fluid" />
          </div>
          <div class="image-slide">
            <img src={logo12} class="img-fluid" />
          </div>
          <div class="image-slide">
            <img src={logo13} class="img-fluid" />
          </div>
          <div class="image-slide">
            <img src={logo14} class="img-fluid" />
          </div>
          <div class="image-slide">
            <img src={logo15} class="img-fluid" />
          </div>
          <div class="image-slide">
            <img src={logo16} class="img-fluid" />
          </div>
        </div>
      </div>

      <hr/>

      <div class="today">
        <h2 class="system"> Use our System Today & <br/> Experience Endless <br/> Possibilities.</h2>
        <h3 class="price"> and get started with a lowest price </h3>
      </div>
      <div class="get1">
                <button class="btn">Get Started</button>
      </div>

    </section>
  );
};

export default Main;