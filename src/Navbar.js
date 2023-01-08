import React ,{useRef, useState} from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import profile from "./images/profile.png";
import logo from "./images/logo.png";
import Arrow from "./images/arrow.png";
import bar from "./images/bar.png";
import cross from "./images/cross.png"

const Navbar = () => {

  const [openarrow,setopenarrow]=useState(false);
  const [isopen,setIsOpen]=useState(false);
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

const openMenu=()=>{
  setIsOpen(true);
}

const closeMenu=()=>{
  setIsOpen(false);
}

  return (
    <div className="navbar">
        {/* <img src={logo}/> */}
        <h1 className='logo'>CarGo.</h1>
        <nav>
          <Link to="/home" className='link'>Home</Link>
          <Link to="/howtoRent" className='link'>How to Rent</Link>
          <Link to="/contact" className='link'>Contact Us</Link>
          <Link to="/offerARide" id="offer">Offer A Ride</Link>
          <div className="profile" onClick={arrow}>
            <img src={profile}/>
          </div>
          <img src={bar} className={isopen?"hide":"bar"} onClick={openMenu}/>
          <img src={cross} className={isopen?"cross":"hide"} onClick={closeMenu}/>
          <div className={openarrow?"logout":"hide"}>
            <p onClick={viewprofile}>View Profile</p>
            <p onClick={logout}>LogOut</p>
          </div>
        </nav>
        <div className={isopen?'openMenudiv':'hide'}>
          <Link to="/home" className='openlink'>Home</Link>
          <Link to="/howtoRent" className='openlink'>How to Rent</Link>
          <Link to="/contact" className='openlink'>Contact Us</Link>
          <p onClick={viewprofile}>View Profile</p>
          <p onClick={logout}>LogOut</p>
        </div> 
    </div>
  )
}

export default Navbar