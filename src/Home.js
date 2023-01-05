import React, { useEffect } from 'react';
import Request from './Request';

import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("login")){
       navigate("/");
    }
  })
  return (
    <div>
        
    </div>
  )
}

export default Home