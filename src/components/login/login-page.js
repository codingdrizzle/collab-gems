import React from "react";
import gems from "../../asserts/images/gems.png";
import {BiUser} from  "react-icons/bi";
import {RiLock2Line} from "react-icons/ri";
import {SlArrowRightCircle} from "react-icons/sl";
 
const LoginPage = ()=>{
    
    return(
        <div className="login-container">
            <div className="first-group">
                    <img src={gems} alt=""/>
                    <h2>Login</h2>
            </div>

          
        </div>
    )
}

export default LoginPage;