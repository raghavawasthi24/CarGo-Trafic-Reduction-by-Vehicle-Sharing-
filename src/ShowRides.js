import React from 'react';
import "./ShowRides.css";

const ShowRides = (props) => {
  return (
    <div className='showRides'>
        <div>
            <p>{props.id}</p>
            <p>{props.source}</p>
            <p>{props.destination}</p>
            <p>{props.date}</p>
            <p>{props.time}</p>
            <p>{props.pricing}</p>
            <p>{props.vehicle}</p>
        </div>
    </div>
  )
}

export default ShowRides