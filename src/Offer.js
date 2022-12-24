import React from 'react';
import car from "./images/carpng.png"
import Registration from './Registration'
const Offer = () => {
  return (
    <div className='main'>
    <div className='text'>
      <h1>Become a CarrGo driver and save on travel costs by sharing your ride with passengers</h1>
      </div>
      <div className='carDiv'>
        <div>
        <img  className='car' src={car}/>
        </div>
        
        <div>
        <Registration/>
        </div>
      </div>
      
    </div>
  )
}

export default Offer;