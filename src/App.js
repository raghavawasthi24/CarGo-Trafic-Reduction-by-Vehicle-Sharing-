import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from "./Login";
import Register from "./Register";
import How from './How';
import Home from './Home';
import Contact from './Contact';
import Offer from './Offer';
import ShowRides from './ShowRides';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/> 
        <Route path="/home" element={<Home/>}/> 
        <Route path="/howToRent" element={<How/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/offerARide" element={<Offer/>}/>
        <Route path="/showRide" element={<ShowRides/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
