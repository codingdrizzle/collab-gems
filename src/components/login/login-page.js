import React from "react";
import gems from "../../asserts/images/gems.png";
import {BiUser} from  "react-icons/bi";
import {RiLock2Line} from "react-icons/ri";
import {BiLogIn} from "react-icons/bi";
import "./styles.css"
import { Form, Input } from "antd";

 
const LoginPage = ()=>{

    const message = ()=>{
        console.log(alert('Login Successful'))
    }
    
    return(
        <div className="login-container">

         
            <div className="first-group">
                    <img className="gems" src={gems} alt=""/>
                    <h2>Login</h2>
            </div>

            <Form>
            <div className="second-group">
                <div className="card1">
                      <BiUser className="biuser" color="darkgrey" size={40}/>
                      <Input id="username" required type="text" placeholder='Username'/>                     
                </div>
                    <a className="login-link" href="" onClick={message}><BiLogIn size={60}/></a>
                <div className="card2">
                      <RiLock2Line className="lock" color="darkgrey" size={40}/>
                      <Input id="password" required type="password" placeholder='Password'/>
                </div>
            </div>
            <div className="third-group">
                 <a className="forget" href="">Forget Password?</a>
                 <h3>Don&apos;t have an account?<a href=""> Register</a></h3>
            </div>
            </Form>

          
        </div>
    )
}

export default LoginPage;