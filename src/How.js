import React from 'react';
import "./How.css";
import s1 from "./images/s1.webp";

const How = () => {
  return (
    <div>
        <p>HOW TO RENT</p>
        <h2>Make 4 Simple Steps To Rent a Car!</h2>
        <p>Find car rentals at over 2900 locations in the country from TanTum local brand.
         It’s easy to rent a car!</p>
         <div className='howSteps'>
            <div className='step1'>
                <div><p>1</p></div>
                <div className='step1div'>
                   <img src={s1}/>
                   <h2>Date&Location</h2>
                   <p>Pick the loaction and the needed rent date.</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default How;