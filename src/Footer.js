import React from 'react';
import logo from "./images/logo.png";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footertxt'>
           <img src={logo}/>
           <p>With so many options for rental service, you must choose the best company. We give you a wide range of quality rides!</p>
        </div>

        <div className='footerOpt'>
           <h2>Discover</h2>
          <Link to="/howtoRent" className='links'>How to Rent</Link>
          <Link to="/FAQS" className='links'>FAQS</Link>
          <Link to="/contact" className='links'>Contact Us</Link>
          <Link to="/offerARide" className='links'>Offer A Ride</Link>
        </div>

        <div className='footerContact'>
           <h2>Contact Us</h2>
           <h3>Our Address</h3>
           <p>Ajay Kumar Garg Enginnering College, Ghaziabad-201009</p>
           <h3>Phone No.</h3>
           <p>+91 9151270246</p>
           <h3>Email</h3>
           <p>raghavawasthi240@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer