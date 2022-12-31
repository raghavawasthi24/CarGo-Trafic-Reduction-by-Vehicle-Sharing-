import React from 'react';
import "./Ride.css";
import user from "./images/user.png";

const Ride = (props) => {
  return (
    <div className='ride'>

      <div className='stats'>
        <div className='driver-profile'>
          <img src={user}/>
          <p>Username</p>
          <p>Ratings</p>
        </div>
        <p id="price"><span>Rs. </span>{props.pricing}</p>
        </div>

        <div className='overview-ride'>
          <p id="source"> <span>{props.time}</span> <span>|</span> <span>{props.source}</span> </p>
          <p id="vehicle"><span>-</span><span>{props.vehicle}</span><span>-</span></p>
          <p id="destination">{props.destination}</p>
        </div>
        
        <div className='btn-request'>
          <button>BOOK</button>
        </div>
        
        
    </div>
  )
}

export default Ride