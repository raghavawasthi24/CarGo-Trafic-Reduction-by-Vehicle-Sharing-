import React ,{useRef, useState} from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import profile from "./images/profile.png";
import logo from "./images/logo.png";
import Arrow from "./images/arrow.png";

const Navbar = () => {

  const [openarrow,setopenarrow]=useState(false);
  const navigate=useNavigate();

  const arrow=()=>{
    if(openarrow==false){
    setopenarrow(true);
  }
  else{
    setopenarrow(false)
  }
}

const logout=()=>{
  localStorage.removeItem("login");
  localStorage.removeItem("profile_id");
  localStorage.removeItem("profile_name");
  navigate("/");
}

const viewprofile=()=>{
  navigate('/profile');
}


  return (
    <div className="navbar">
        {/* <img src={logo}/> */}
        <h1 className='logo'>CarGo.</h1>
        {/* <div className='search_field'>
          <input type="search" id='search_bar' placeholder='Tell us your location'/>
          <img src={Arrow}/>
        </div> */}
        <nav>
          <Link to="/home" className='link'>Home</Link>
          <Link to="/howtoRent" className='link'>How to Rent</Link>
          {/* <Link to="/FAQS" className='link'>FAQS</Link> */}
          <Link to="/contact" className='link'>Contact Us</Link>
          <Link to="/offerARide" id="offer">Offer A Ride</Link>
          <div className="profile" onClick={arrow}>
            <img src={profile}/>
          </div>
          <div className={openarrow?"logout":"hide"}>
            <p onClick={viewprofile}>View Profile</p>
            <p onClick={logout}>LogOut</p>
          </div>
        </nav> 
    </div>
  )
}

export default Navbar