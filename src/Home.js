import React from 'react';
import Request from './Request';
import About from "./About";
import Team from './Team';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
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