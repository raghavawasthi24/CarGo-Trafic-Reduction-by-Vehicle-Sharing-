import axios from 'axios';
import React, { useState,useEffect } from 'react';
import "./ProfilePage.css";
import MyRide from './MyRide';
import { profile_data } from './Login';

const ProfilePage = () => { 

  
  const[requested,setrequested]=useState(true);
  const [ridesList,setridesList]=useState([])
  const [turn,setTurn]=useState(true);


  useEffect(()=>{
    if(requested==true){
    axios.get('https://web-production-0189.up.railway.app/vehicle/allrides/4/')
    .then((res)=>{
      setridesList(res.data.rides_requested_by_me);
      console.log(ridesList);
    }).catch((err)=>{
      console.log(err);
    })
  }
  },[requested])


  const ridesRequested=()=>{
      setrequested(true);
      setTurn(true);
  }


  const ridesOffered=()=>{
    setrequested(false);
    setTurn(false);
    axios.get('https://web-production-0189.up.railway.app/vehicle/allrides/4/')
    .then((res)=>{
      setridesList(res.data.Rides_offered_by_me);
      console.log(ridesList);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    
    <div className='profile-page'>
      <p>Name : {profile_data.name}</p>
      <p>Mobile Number : {profile_data.mobile_no}</p>
      <p>Email Addresss : {profile_data.email}</p>
      <div className='ridesPage'>
        <div className='show-all-rides'>
          <div onClick={ridesRequested} className={turn?"requestedRide":"nothing"}>Rides Requested</div>
          <div onClick={ridesOffered} className={turn?"nothing":"requestedRide"}>Rides Offered</div>
          </div>
        <div className='all-rides'>
           {ridesList.map((val)=>{
            return(
              <MyRide id={val.id} source={val.source} destination={val.destination} time={val.time} date={val.date} pricing={val.price} vehicle={val.vehicle} vacancy={val.Vacancy} name={val.full_name}/>
            )
           })}
        </div>
      </div>
      
    </div>
  )
}

export default ProfilePage