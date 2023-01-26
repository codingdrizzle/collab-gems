import React from "react";
import LoginPage from "./login-page";

const Login = ()=>{
    return( 
        <div>
                    <LoginPage/>
                    <div className="third-group">
                 <a href="">Forget Password?</a>
                 <h3>Don&apos;t have an account?<a href=""> Register</a></h3>
            </div>
        </div>
        
    )
};

export default Login