import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    setIsNavVisible(false);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <img src={logo} width="150px" alt="Logo" />
        </div>
        <ul className={`navLists flex ${isNavVisible ? "visible" : ""}`}>
          <li className="navItem">
            <Link to="/" className="navLink" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/Pages/Aboutus" className="navLink" onClick={closeNav}>
              About Us
            </Link>
          </li>
          <li className="navItem">
            <a href="/#Feature" className="navLink" onClick={closeNav}>
              Features
            </a>
          </li>
          <li className="navItem">
            <a href="/#Pricing" className="navLink" onClick={closeNav}>
              Pricing
            </a>
          </li>
          <li className="navItem">
            <Link to="/Pages/InvoiceGenerator" className="navLink" onClick={closeNav}>
              Invoice Generate
            </Link>
          </li>
          <li className="navItem">
            <Link to="/Pages/FAQ" className="navLink" onClick={closeNav}>
              FAQ
            </Link>
          </li>
          <li className="navItem">
            <Link to="/Pages/Contact" className="navLink" onClick={closeNav}>
              Contact
            </Link>
          </li>
          <li className="navItem">
            <Link to="/Pages/Partner" className="navLink" onClick={closeNav}>
              Partner With Us
            </Link>
          </li>
          <li className="navItem">
            <Link to="/Pages/Login" className="navLink" onClick={closeNav}>
              Login
            </Link>
          </li>
        </ul>
        <button className="navToggle" onClick={toggleNav}>
          {isNavVisible ? <FaTimes /> : <FaBars />}
        </button>
      </header>
      {isNavVisible && (
        <button className="closeButton" onClick={closeNav}>
          <FaTimes />
        </button>
      )}
    </section>
  );
};

export default Navbar;
