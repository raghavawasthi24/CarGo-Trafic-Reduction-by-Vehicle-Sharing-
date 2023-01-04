import React, { useEffect } from 'react';
import Request from './Request';
import About from "./About";
import Team from './Team';
import Navbar from './Navbar';
import Footer from './Footer';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("login")){
       navigate("/");
    }
  })
  return (
    <div>
        <Navbar/>
        <Request/>
        <About/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Home