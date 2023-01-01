import React, { useEffect } from 'react';
import { useState } from 'react';
import "./Offer.css";
import driver from "./images/driver2.jpg";
import offerRide from "./images/offerRide.png";
import Navbar from './Navbar';
import Footer from './Footer';
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
  const [error, seterror] = useState(false);
  // const navigate=useNavigate();
  const [formerror, setformerror] = useState({});
  const [issuccessful,setIssuccessful]=useState(false);

  const userHandler = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });   
  }

  const errors_form=()=> {
    seterror(true);
    const errors = {};
    const cvacancy = /^[1-9]{1}$/;
    const cprice = /^[1-9]([0-9]){0,5}$/;

    if (formvalues.source!="") {
      errors.source= "";
      // seterror(true);
      // console.log(error.source)
    }
    else {
      seterror(false);
      errors.source = "**Please enter source";
    }



    if (formvalues.destination!="") {
      errors.destination = "";
      // seterror(true);
      // console.log(error.destination)
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

    
    if (formvalues.time=="") {
      seterror(false);
      errors.time = "**Please select Time";
    }
    else {
      errors.time = "";
    }

    if (formvalues.vehicle=="") {
      seterror(false);
      errors.vehicle = "**This field is required";
    }
    else {
      errors.vehicle = "";
    }


    // if (formvalues.Vacancy == "") {
    //   seterror(false);
    //   errors.Vacancy = "**This field is Required";
    // }
    // else if(formvalues.Vacancy==0){
    //   errors.Vacancy = "**Vacancy can't be 0";
    // }
    // else{
    //   errors.Vacancy="";
    // }
    if(!cvacancy.test(formvalues.Vacancy)){
      seterror(false);
      errors.Vacancy="**Vacancy must range between 1-9"
    }
    else{
      errors.Vacancy="";
    }

    if (!cprice.test(formvalues.price)) {
      seterror(false);
      errors.price = "**This price is invalid";
    }
    else {
      errors.price = "";
    }
   


    return errors;
  }


  const validateform = (e) => {
    e.preventDefault();
    setformerror(errors_form());
    // if(error==true){
    //   axios.post(`https://web-production-0189.up.railway.app/vehicle/publish/`,{
    //     source: formvalues.source,
    //     destination: formvalues.destination,
    //     date: formvalues.date,
    //     time: formvalues.time,
    //     vehicle:formvalues.vehicle,
    //     Vacancy: formvalues.Vacancy,
    //     price:formvalues.price,
    //     owner:3,
    //   })
    //   .then(res=>{
    //     console.log(res);
    //     successful();
    //   }).catch(err=>{
    //     console.log(err)
    //   })
    //   console.log(formvalues);
    // }
  }

  

  useEffect(()=>{
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
        successful();
      }).catch(err=>{
        console.log(err)
      })
      console.log(formvalues);
      }
  },[error])

  const successful=()=>{
    setIssuccessful(true)
    setTimeout(()=>{
      setIssuccessful(false);
      window.location.reload();
    },3000)
  }

  return (
    <>
    <Navbar/>
    <div className='offer'>
    <div id="driver">
      <img src={driver}/>
       <p>Start. Share your Vehicle with others.</p>
    </div>
    <div className='offerSec'>
      <div className='offerPart'>
        <h2>Publish Your Ride</h2>
        <img src={offerRide} className="offerRideimg"/>
      </div>
       <form onSubmit={validateform} className="formControl">

        <div className="offersigninputs">

          <div className="offerpickup offerregisterfield">
          <div className='offerinputfield'>
             {/* <img src={redCircle}/> */}
             <input type="text" placeholder="Select Source" name="source" value={formvalues.source} onChange={userHandler} />
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
         <input type="text" name="Vacancy" placeholder="Vacancy" onChange={userHandler} value={formvalues.Vacancy} />
         <p className='offerthrowerror'>{formerror.Vacancy}</p>
       </div>

       <div className="offerprice offerregisterfield">
         <input type="text" name="price" placeholder="Price" onChange={userHandler} value={formvalues.price} />
         <p className='offerthrowerror'>{formerror.price}</p>
       </div>

       </div>


      <div>
        <input type="submit" className='offersubmits' value="Publish"/>
      </div>

   </form>
    </div>

    <div className={issuccessful?"successful-msg":"hide"}>
       <p>Your Ride is successfully published</p>
    </div>
    
    
    
  </div>
  <Footer/>
  </>
  )
}

export default Offer