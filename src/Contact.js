import React, { useEffect, useState } from 'react';
import "./Contact.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { Navigate, useNavigate } from 'react-router-dom';

const Contact = () => {

  const initialvalues={
    Name:"",
    Email:"",
  }

  const navigate=useNavigate();
   useEffect(()=>{
    // console.log(Ridehandler)
    if(!localStorage.getItem("login")){
         navigate("/");
    }
  })

  const userhandler=(e)=>{
    const {name,value} =e.target;
    setFormvalues({...formvalues,[name]:value})
  }

  const[formvalues,setFormvalues]=useState(initialvalues);
  const[formerror,setFormerror]=useState({});
  const[error,seterror]=useState(false);

  const errors =()=>{
    seterror(true);
    const errorsform={};
    const cname= /^[a-zA-Z\.\'\-]{3,50}(?: [a-zA-Z\.\'\-]{3,50})+$/;
    const cemail= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if(cname.test(formvalues.Name)){
      errorsform.Name="";
    }
    else{
      seterror(false);
      errorsform.Name="**This name is invalid";
    }

    if(cemail.test(formvalues.Email)){
      errorsform.Email="";
    }
    else{
      seterror(false)
      errorsform.Email="**Enter valid email";
    }
    return errorsform;
    
  }

  const submitHandler=(e)=>{
     e.preventDefault();
     setFormerror(errors());
  }

  useEffect(()=>{
     if(error==true){
      console.log(formvalues);
     }
  },[error])

  return (
    <>
    <Navbar/>
    <div className='contact-page'>
       <h2>Want To Contact Us?</h2>
       <div class="contact">
           <form method="" className='contact-form' onSubmit={submitHandler}>
             <input type="text" name="Name" value={formvalues.Name} placeholder="Your Name" className='formInputs' onChange={userhandler}/>
             <p className='contacterror'>{formerror.Name}</p>
             <input type="text" name="Email" placeholder='Your Email'  value={formvalues.Email}className='formInputs' onChange={userhandler}/>
             <p className='contacterror'>{formerror.Email}</p>
             <textarea cols="30" rows="10" name="Message" className='formInputs'  value={formvalues.Message}placeholder='Write a message..'  onChange={userhandler}></textarea>
             <input type='submit' value='Send' className='contactSubmit'/>
           </form>
           <div className='formMap'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.330820519728!2d77.50053627290335!3d28.649811593123054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced0607ba86dd%3A0x72a838f9f6307e87!2sWave%20Dream%20Homes!5e0!3m2!1sen!2sin!4v1672546144028!5m2!1sen!2sin"
           width="90%"
           height="450"
           style={{border:0}}
           allowfullscreen=""
           loading="lazy"
           referrerpolicy="no-referrer-when-downgrade">
           </iframe>
           </div>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact