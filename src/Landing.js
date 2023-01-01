import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import How from './How';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';
import Offer from './Offer';
import ShowRides from './ShowRides';
import Footer from './Footer';

const Landing = () => {
  return (
    <div>
        <Navbar/>
          <Routes>
            <Route path="/landing/" element={<Home/>}/>
            <Route path="./howtoRent" element={<How/>}/>
            <Route path='./contact' element={<Contact/>}/>
            <Route path="/landing/offerARide" element={<Offer/>}/>
            <Route path="/landing/showRide" element={<ShowRides/>}/>
          </Routes>
        <Footer/>
    </div>
  )
}

export default Landing