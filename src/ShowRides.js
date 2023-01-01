import React, { useEffect, useRef, useState} from 'react';
import "./ShowRides.css";
import { Ridehandler } from './Request';
import Ride from './Ride';
import { Navigate, useNavigate } from 'react-router-dom';

const ShowRides = () => {

  let initialvalues=
    {
      vehicle:"",
      price:""
    }
  

   useEffect(()=>{
    console.log(Ridehandler)
  })
  const rideref=useRef();
  const[updatedRides,setUpdatedRides]=useState(Ridehandler[0]);
  let filteredRideDisplay=[];
  const[formvalues,setformvalues]=useState(initialvalues);


     const filterRide=(e)=>{
        const{name,value}=e.target;
        setformvalues({...formvalues,[name]:value});
     }

     const submitHandler=(e)=>{
         e.preventDefault();
         if((formvalues.vehicle =="" || formvalues.vehicle=="All") && formvalues.price =="")
         {
          setUpdatedRides(Ridehandler[0]);
          console.log(formvalues)
         }
         else if(formvalues.vehicle == "" || formvalues.vehicle=="All"){
          for(let i=0;i<Ridehandler[0].length;i++)
          {
            if(parseInt(Ridehandler[0][i].price)<formvalues.price)
            {
             filteredRideDisplay.push(Ridehandler[0][i])
            }
          }
          setUpdatedRides(filteredRideDisplay);
          console.log(formvalues)
         }
         else if(formvalues.price==''){
          for(let i=0;i<Ridehandler[0].length;i++)
          {
            if(Ridehandler[0][i].vehicle==formvalues.vehicle)
            {
             filteredRideDisplay.push(Ridehandler[0][i])
            }
          }
          setUpdatedRides(filteredRideDisplay);
          console.log(formvalues)
         }
         else{
         for(let i=0;i<Ridehandler[0].length;i++)
         {
           if(Ridehandler[0][i].vehicle==formvalues.vehicle &&  parseInt(Ridehandler[0][i].price)<formvalues.price)
           {
            filteredRideDisplay.push(Ridehandler[0][i])
           }
         }
         setUpdatedRides(filteredRideDisplay);
         console.log(formvalues)
        }
     }
 

  return (
    <div className='showRides'>
      <h2> <span>{Ridehandler[0][0].source}</span> <span>---</span> <span>{Ridehandler[0][0].destination}</span></h2>
      <p>Date : {Ridehandler[0][0].date}</p>
      <div className='displayRide'>
      <div className='ride-display'>
        {updatedRides.map((val)=>{
          return(
            <div className="rideShow">
              <Ride id={val.id} source={val.source} destination={val.destination} time={val.time} date={val.date} pricing={val.price} vehicle={val.vehicle} vacancy={val.Vacancy}/>
            </div>
          )
        })}
        </div>
  
        <form onSubmit={submitHandler} className='rides-filter'>
          <div class="vehicleFilter">
            <h4>Filter by Vehicle</h4>
            <input type="radio" name="vehicle" value="All" onClick={filterRide}/>
            <label>All</label><br/> 
            <input type="radio" name="vehicle" value="Bike" onClick={filterRide}/>
            <label>Bike</label><br/>
            <input type="radio" name="vehicle" value="Bicycle" onClick={filterRide}/>
            <label>Bicycle</label><br/>
            <input type="radio" name="vehicle" value="Car" onClick={filterRide}/>
            <label>Car</label><br/>
            <input type="radio" name="vehicle" value="Bus" onClick={filterRide}/>
            <label>Bus</label><br/>
            <input type="radio" name="vehicle" value="Truck" onClick={filterRide}/>
            <label>Truck</label><br/>
          </div>

          <div className='priceFilter'>
            <h4>Filter by Price</h4>
             <input type="radio" value="100" name="price" onClick={filterRide}/>
             <label>Below 100</label><br/>
             <input type="radio" value="500" name="price" onClick={filterRide}/>
             <label>Below 500</label><br/>
             <input type="radio" value="1000" name="price" onClick={filterRide}/>
             <label>Below 1000</label><br/>
             <input type="radio" value="5000" name="price" onClick={filterRide}/>
             <label>Below 5000</label><br/>
          </div>

          <input type="submit" id="submit" value="Apply Filter"/>
         
        </form>
        </div>
    </div>
  )
}

export default ShowRides