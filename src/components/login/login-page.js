import React from "react";
import gems from "../../asserts/images/gems.png";
import {BiUser} from  "react-icons/bi";
import {RiLock2Line} from "react-icons/ri";
import {SlArrowRightCircle} from "react-icons/sl";
import "./styles.css"
import { Form,Input, message } from "antd";
import { useState } from "react";

 
const LoginPage = ()=>{

    // const Loginsucces=[message,setMessage]=useState ('');{
    //     message= 'Login Successful'
    // }
    
    return(
        <div className="login-container">

            <Form>
            <div className="first-group">
                    <img src={gems} alt=""/>
                    <h2>Login</h2>
            </div>
            <div className="second-group">
                <div className="card1">
                      <BiUser size={40}/>
                      <Input required type="text" placeholder='Username'/>
                      <a ><SlArrowRightCircle size={60}/></a>
                </div>
                <div className="card2">
                      <RiLock2Line size={40}/>
                      <Input required type="password" placeholder='Password'/>
                </div>
            </div>
            <div className="third-group">
                 <a href="">Forget Password?</a>
                 <h3>Don&apos;t have an account?<a href=""> Register</a></h3>
            </div>
            </Form>

          
        </div>
    )
}

export default LoginPage;