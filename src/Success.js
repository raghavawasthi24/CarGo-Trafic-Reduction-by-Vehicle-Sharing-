import React from 'react';
import "./Success.css";
import success from "./images/tick.png";

const Success = () => {
  return (
    <div className='success'>
        <div className='done'>
            <img src={success} id="success-img"/>
            <h2>Your Ride is Confirmed!</h2>
            <p>The details are sent to your registered Email address.</p>
        </div>
    </div>
  )
}

export default Success