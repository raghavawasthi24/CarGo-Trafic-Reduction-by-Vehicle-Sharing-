import React from 'react';
import { useState } from 'react';
import "./Offer.css";
import driver from "./images/driver.jpg";
import axios from 'axios';

const Offer = () => {
  let initialvalues = {
    source: "",
    destination: "",
    date: "",
    time: "",
    vehicle:"",
    Vacancy: "",
    price:"",
    owner:3,
  };

  const [formvalues, setformvalues] = useState(initialvalues);
  const [error, seterror] = useState(true);
  // const navigate=useNavigate();
  const [formerror, setformerror] = useState({});

  const userHandler = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });   
  }

  const errors_form=()=> {
    const errors = {};


    if (formvalues.source!="") {
      errors.source= "";
      seterror(true);
      console.log(error.source)
    }
    else {
      seterror(false);
      errors.source = "**Please enter source";
    }



    if (formvalues.destination!="") {
      errors.destination = "";
      seterror(true);
      console.log(error.destination)
    }
    else {
      seterror(false);
      errors.destination = "**Please enter destination";
    }


    if (formvalues.date=="") {
      seterror(false);
      errors.date = "**Please select Date";
    }
    else {
      errors.date = "";
    }



    if (formvalues.Vacancy == "") {
      seterror(false);
      errors.Vacancy = "**Please select Passenger";
    }
    else {
      errors.Vacancy = "";
    }
   


    return errors;
  }
  const validateform = (e) => {
    e.preventDefault();
    setformerror(errors_form());
    if(error==true){
      axios.post(`https://web-production-0189.up.railway.app/vehicle/publish/`,{
        source: formvalues.source,
        destination: formvalues.destination,
        date: formvalues.date,
        time: formvalues.time,
        vehicle:formvalues.vehicle,
        Vacancy: formvalues.Vacancy,
        price:formvalues.price,
        owner:3,
      })
      .then(res=>{
        console.log(res);
        // <ShowRides id={res.data.id} source={res.data.source} destination={res.data.destination} time={res.data.time} date={res.data.date} pricing={res.data.price} vehicle={res.data.vehicle}/>
        // navigate("/showRide")
      }).catch(err=>{
        console.log(err)
      })
      console.log(formvalues);
    }
  }
  return (
    <div className='offer'>
    <div id="driver">
      <img src={driver}/>
       <p>Start. Share your Vehicle with others.</p>
    </div>
    <div className='offerRide'>
    <form onSubmit={validateform}>

        <div className="offersigninputs">

          <div className="offerpickup offerregisterfield">
          <div className='offerinputfield'>
             {/* <img src={redCircle}/> */}
             <input type="text" placeholder="Select Pickup" name="source" value={formvalues.source} onChange={userHandler} />
          </div>
          <p className='offerthrowerror'>{formerror.source}</p>
          </div>

        <div className="offerdestination offerregisterfield">
          <div className='offerinputfield'>
            {/* <img src={blueCircle}/> */}
            <input type="text" name="destination" placeholder="Select Destination" value={formvalues.destination} onChange={userHandler} />
         </div>
         <p className='offerthrowerror'>{formerror.destination}</p>
       </div>

        <div className="offerdate offerregisterfield">
          <input type="date" name="date" placeholder="Select Date" value={formvalues.date} onChange={userHandler} />
          <p className='offerthrowerror'>{formerror.date}</p>
       </div>

       <div className="offertime offerregisterfield">
         <input type="time" name="time" placeholder="Time" onChange={userHandler} value={formvalues.time} />
         <p className='offerthrowerror'>{formerror.time}</p>
       </div>

       <div className="offervehicle offerregisterfield">
         <input type="text" name="vehicle" placeholder="Vehicle" onChange={userHandler} value={formvalues.vehicle} />
         <p className='offerthrowerror'>{formerror.vehicle}</p>
       </div>
      

       <div className="offervacancy offerregisterfield">
         <input type="number" name="Vacancy" placeholder="Vacancy" onChange={userHandler} value={formvalues.Vacancy} />
         <p className='offerthrowerror'>{formerror.Vacancy}</p>
       </div>

       <div className="offerprice offerregisterfield">
         <input type="text" name="price" placeholder="Price" onChange={userHandler} value={formvalues.price} />
         <p className='offerthrowerror'>{formerror.price}</p>
       </div>

       </div>


      <div>
        <input type="submit" className='offersubmits' value="Register"/>
      </div>

   </form>
    </div>
  </div>
  )
}

export default Offer