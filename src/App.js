import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Offer from './Offer';
import Footer from './Footer';
import Landing from './Landing';
import How from './How';
import Contact from './Contact';
import Login from "./Login";
import Register from "./Register";
import ShowRides from './ShowRides';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        {/* <Route path="/FAQS" element={<Offer/>}/> */}
        <Route path="/howtoRent" element={<How/>}/>
        {/* <Route path="/FAQS" element={<Offer/>}/> */}
        {/* <Route path="/contact" element={<Offer/>}/> */}
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/offerARide" element={<Offer/>}/>
        <Route path="/showRide" element={<ShowRides/>}/>
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
