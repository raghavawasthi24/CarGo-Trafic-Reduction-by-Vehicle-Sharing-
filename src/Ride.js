import React from 'react';

const Ride = (props) => {
  return (
    <div className='ride'>
        <p>{props.source}</p>
        <p>{props.destination}</p>
        <p>{props.time}</p>
        <p>{props.date}</p>
        <p>{props.price}</p>
        <p>{props.vehicle}</p>
    </div>
  )
}

export default Ride