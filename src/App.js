import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Offer from './Offer';
import Request from './Request';
import About from "./About";
import Team from './Team';
import Footer from './Footer';
import How from './How';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Request/>}/>
        <Route path="/howtoRent" element={<How/>}/>
        <Route path="/FAQS" element={<Offer/>}/>
        <Route path="/contact" element={<Offer/>}/>
        <Route path="/offerARide" element={<Offer/>}/>
      </Routes>
      <About/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
