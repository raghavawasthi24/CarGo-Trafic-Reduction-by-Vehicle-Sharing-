import React from 'react';
import "./Ride.css";
import user from "./images/user.png";
import { Ridehandler } from './Request';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Ride = (props) => {

  const navigate=useNavigate();

  const booked=()=>{
    axios.post(`https://web-production-0189.up.railway.app/vehicle/requestrides/${props.id}/${props.vacancy}`,{
       source:props.source,
       ride:props.id,
       destination:props.destination,
       passenger:props.vacancy,
       date:props.date,
       receiver:3,
    }).then(res=>{
      console.log(res);
      navigate("/");
    }).catch(err=>{
      console.log(err)
    })
  }
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
          <button onClick={booked}>BOOK</button>
        </div>
        
        
    </div>
  )
}

export default Ride