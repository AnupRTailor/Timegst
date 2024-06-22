import React from "react";
import "./home.css";
import lg from './banner.png'

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <div className="homeContent container">
        <div className="textDiv">
          <h1>
            <strong>
              <span className="bigText">
                Free GST <br /> Billing <br /> Software for
                <br /> all type of
                <br /> Businesses
              </span>
            </strong>
          </h1>
          <br />
          <h4 className="homeTitle">
            Manage your complete business with Time <br /> GST. Best software
            for billing, inventory & <br /> accounting. Most simple, secure &
            easy <br /> Software. Get Started Now!
          </h4>
        </div>

        <div class="button-container">
          <button className="btn">Get Started</button>
          <button className="btn">Discover More</button>
        </div>

        <div className="logoDiv1">
              <img src={lg} alt="" width= "500px" />
        </div>
      </div>
    </section>
  );
};

export default Home;
