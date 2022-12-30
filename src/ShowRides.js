import React, { useEffect} from 'react';
import "./ShowRides.css";
import { Ridehandler } from './Request';
import Ride from './Ride';

const ShowRides = () => {

  useEffect(()=>{
    console.log(Ridehandler)
  })
  
 
  return (
    <div className='showRides'>
      <h2> <span>{Ridehandler[0][0].source}</span> <span>---</span> <span>{Ridehandler[0][0].destination}</span></h2>
      <p>{Ridehandler[0][0].date}</p>
        {Ridehandler[0].map((val)=>{
          return(
            <div className="rideShow">
              <Ride id={val.id} source={val.source} destination={val.destination} time={val.time} date={val.date} pricing={val.price} vehicle={val.vehicle}/>
            </div>
          )
        })}
    </div>
  )
}

export default ShowRides