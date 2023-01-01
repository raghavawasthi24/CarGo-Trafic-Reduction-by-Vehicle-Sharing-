import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const initialvalues={
        mobile_number:"",
        password:""
    }
    const navigate=useNavigate();
    const [formvalues,setformvalues]=useState(initialvalues);
    const [formerror,setformerror]=useState({});
    const [noerror,setnoerror]=useState(false);

    const userHandler=(e)=>{
        const {name,value}=e.target;
        setformvalues({...formvalues,[name]:value});
    }
    const error=()=>{
        const errors={}
        setnoerror(true);
        const cmobile_num= /^[7-9]([0-9]){9}$/;

        if(cmobile_num.test(formvalues.mobile_number)){
            errors.mobile_number="";
        }
        else{
            setnoerror(false)
            errors.mobile_number="**Invalid Mobile Number";
        }

        if(formvalues.password==""){
            errors.password="**This field is required"
            setnoerror(false)
        }
        else{
            errors.password="";
        }

        return errors;
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        setformerror(error());
    }

    useEffect(()=>{
        if(noerror==true){
            axios.post("https://web-production-0189.up.railway.app/auth/login/",{
                mobile_number:formvalues.mobile_number,
                password:formvalues.password
            }).then((res)=>{
                console.log(res)
                navigate("/home");
            }).catch((err)=>{
                console.log(err);
            })
            // console.log(formvalues);
        }
    },[noerror])

    const userRegister=()=>{
        navigate("/register");
    }

    return(
    <div className='login'>
        <h1>CarGo.</h1>
        <div class="loginControls">
            <form onSubmit={submitHandler} className="loginPage">
                <input type="text" name="mobile_number" value={formvalues.mobile_number} placeholder="Mobile Number" onChange={userHandler}/>
                <p className='loginerror'>{formerror.mobile_number}</p>
                <input type="password" name="password" value={formvalues.password} placeholder="Password" onChange={userHandler}/>
                <p className='loginerror'>{formerror.password}</p>
                <input type="submit" value="LogIn" className='logInsubmit'/>
            </form>
            <NavLink to="/forgetPassword" className="forgetPassword">Forgotten Password?</NavLink>
            <h4>Not Have An Account?</h4>
            
            <button  className="register" onClick={userRegister}>Register</button>
            
        </div>
    </div>
  )
}

export default Login