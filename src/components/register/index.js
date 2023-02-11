import React from "react";
import { Typography } from "antd";
import img from "../../asserts/images/gems.png";


const Registration = ()=>{
    const {Title} = Typography;
    return(
        <div className="register-card">
            <div className="register-header">
                  <img src={img} alt=""/>
                  <Title className="login-text" level={3}>Login</Title>
                  <Title className="register-text" level={1}>Register</Title>
            </div>
            <div className="register-form">

            </div>
        </div>
    )
};

export default Registration;