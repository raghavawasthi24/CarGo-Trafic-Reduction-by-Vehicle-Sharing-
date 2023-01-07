import React from 'react';
import user from "./images/user.png";
import "./MyRide.css";

const MyRide = (props) => {
  return (
    <div className='ridesInfo'>
      <div className='dateAndtime'>
        <p><span>{props.date}</span> | <span>{props.time}</span></p>
        <p>Rs. {props.pricing}</p>
      </div>
      <div className='user-profile-Page'>
        <div id="sourceInfo">
          <p>{props.source}</p>
        </div>
        <div id="vehicleInfo">
          <p>--{props.vehicle}--</p>
        </div>
        <div id="destinationInfo">
          <p>{props.destination}</p>
        </div>
      </div>
      <div className='completedInfo'>
        <p>Completed</p>
      </div>
    </div>
  )
}

export default MyRide