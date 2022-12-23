import React,{useState} from 'react';
import "./Request.css";
import redCircle from "./images/redCircle.png";
import blueCircle from"./images/blueCircle.png";

const Request = () => {
  const initialvalues = {
    pickup: "",
    destination: "",
    date: "",
    time: "",
    vacancy: "",
  };

  const [formvalues, setformvalues] = useState(initialvalues);
  const [error, seterror] = useState(true);
  const [formerror, setformerror] = useState({});

  const userHandler = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });   
  }

  const errors_form=()=> {
    const errors = {};


    if (formvalues.pickup!="") {
      errors.pickup= "";
      seterror(true);
      console.log(error.pickup)
    }
    else {
      seterror(false);
      errors.pickup = "Please enter pickup";
    }



    if (formvalues.destination!="") {
      errors.destination = "";
      seterror(true);
      console.log(error.destination)
    }
    else {
      seterror(false);
      errors.destination = "Please enter destination";
    }


    if (formvalues.date=="") {
      seterror(false);
      errors.year = "Please select Date";
    }
    else {
      errors.year = "";
    }



    // if (formvalues.time == "") {
    //   seterror(false);
    //   errors.branch = "Please select Time";
    // }
    // else {
    //   errors.branch = "";
    // }


    if (formvalues.vacancy == "") {
      seterror(false);
      errors.branch = "Please select Vacancy";
    }
    else {
      errors.branch = "";
    }
   


    return errors;
  }
  const validateform = (e) => {
    e.preventDefault();
    setformerror(errors_form());
    if(error==true){
      console.log(formvalues);
    }
  }


  return (
    <div className='request'>
      <div className='requestTextArea'>
         <h2>
          Earn. Connect. Contribute to the Society
         </h2>
         <p>We let YOU pick the car that will ensure the best trip ever.</p>
         <p>Give us a shout and we will ready to get it ready for you.</p>
      </div>
      <div className='requestSec'>
          <div className='requestCar'>
          <h2>Book Your Ride</h2>
 
     <form onSubmit={validateform}>

       <div className="signinputs">
         <div className="pickup registerfield">
          <img src={redCircle}/>
         <input type="text" placeholder="Select Pickup" name="pickup" value={formvalues.pickup} onChange={userHandler} />
         <p className='throwerror'>{formerror.pickup}</p>
       </div>

     <div className="destination registerfield">
        <img src={blueCircle}/>
        <input type="text" name="destination" placeholder="Select Destination" value={formvalues.destination} onChange={userHandler} />
        <p className='throwerror'>{formerror.destination}</p>
     </div>

     <div className="date registerfield">
       <input type="date" name="date" placeholder="Select Date" value={formvalues.date} onChange={userHandler} />
       <p className='throwerror'>{formerror.date}</p>
     </div>

     <div className="vacancy registerfield">
       <input type="number" name="vacancy" placeholder="Vacancy" onChange={userHandler} value={formvalues.vacancy} />
       <p className='throwerror'>{formerror.vacancy}</p>
     </div>
   </div>


   <div>
     {/* <input type="submit" value={verified?"Register":""} /> */}
     <input type="submit" className='submit' value="Register"/>
     {/* <NavLink to="/" type="submit" className="registerbtn">Register</NavLink> */}
   </div>

 </form>
          </div>
      </div>
    </div>
  )
}

export default Request