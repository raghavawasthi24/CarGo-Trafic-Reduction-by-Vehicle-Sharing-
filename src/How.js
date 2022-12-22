import React from 'react';
import "./How.css";
import s1 from "./images/s1.webp";
import s2 from "./images/s2.webp";
import s3 from "./images/s3.webp";
import s4 from "./images/s5.webp";

const How = () => {
  return (
    <div className='rent'>
        <p>HOW TO RENT</p>
        <h2>Make 4 Simple Steps To Rent a Car!</h2>
        <p>Find car rentals at over 2900 locations in the country from TanTum local brand.
         It’s easy to rent a car!</p>
         <div className='howSteps'>
            <div className='step1'>
                <div id="num"><p>1</p></div>
                <div className='step1div'>
                   <img src={s1}/>
                   <center>
                     <h2>Date&Location</h2>
                     <p>Pick the loaction and the needed rent date.</p>
                   </center>
                </div>
            </div>

            <div className='step1'>
                <div id="num"><p>2</p></div>
                <div className='step1div'>
                   <img src={s2}/>
                   <center>
                     <h2>Choose A Car</h2>
                     <p>Select the vehicle using our catalogues.</p>
                   </center>
                </div>
            </div>

            <div className='step1'>
                <div id="num"><p>3</p></div>
                <div className='step1div'>
                   <img src={s3}/>
                   <center>
                     <h2>Make A Booking</h2>
                     <p>Enter your name and booking details.</p>
                   </center>
                </div>
            </div>

            <div className='step1'>
                <div id="num"><p>4</p></div>
                <div className='step1div'>
                   <img src={s4}/>
                   <center>
                     <h2>Enjoy Your Ride!</h2>
                     <p>Enjoy your trip and our good service!</p>
                   </center>
                </div>
            </div>
         </div>
    </div>
  )
}

export default How;