import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import How from './How';
import Home from './Home';
import Contact from './Contact';
import Offer from './Offer';
import ShowRides from './ShowRides';
import Success from './Success';
import Request from './Request';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/> 
        <Route path="/home" element={<Request/>}/> 
        <Route path="/howToRent" element={<How/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/offerARide" element={<Offer/>}/>
        <Route path="/showRide" element={<ShowRides/>}/>
        <Route path="/bookedRide" element={<Success/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
