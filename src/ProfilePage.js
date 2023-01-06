import axios from 'axios';
import React, { useState,useEffect } from 'react';
import "./ProfilePage.css";
import MyRide from './MyRide';

const ProfilePage = () => { 

  
  const[requested,setrequested]=useState(true);
  const [ridesList,setridesList]=useState([])

  useEffect(()=>{
    if(requested==true){
    axios.get('https://web-production-0189.up.railway.app/vehicle/allrides/4/')
    .then((res)=>{
      // console.log(res.data.rides_requested_by_me)
      setridesList(res.data.rides_requested_by_me);
      console.log(ridesList);
    }).catch((err)=>{
      console.log(err);
    })
  }
  },[requested])


  const ridesRequested=()=>{
      setrequested(true);
  }


  const ridesOffered=()=>{
    setrequested(false);
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
      <div className='show-all-rides'>
        <div onClick={ridesRequested}>Rides Requested</div>
        <div onClick={ridesOffered}>Rides Offered</div>
      </div>
      <div>
         {ridesList.map((val)=>{
          return(
            <MyRide id={val.id} source={val.source} destination={val.destination} time={val.time} date={val.date} pricing={val.price} vehicle={val.vehicle} vacancy={val.Vacancy} name={val.full_name}/>
          )
         })}
      </div>
    </div>
  )
}

export default ProfilePage