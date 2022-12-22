import React from 'react';
import "./Member.css";
import facebook from "./images/facebook.png";
import insta from "./images/instagram.png";
import twitter from "./images/twitter.png";

const Member = (props) => {
  return (
    <div className='member'>
        <div className='memberImg'><img src={props.imgsrc}/></div>
        <div className='memberInfo'>
            <div className='memberDetails'>
                <h2>{props.title}</h2>
                <p>{props.post}</p>
            </div>
            <div className='memberMedia'>
                <div className='mediaimg'><img src={facebook}/></div>
                <div className='mediaimg'><img src={insta}/></div>
                <div className='mediaimg'><img src={twitter}/></div>
            </div>
        </div>
    </div>
  )
}

export default Member