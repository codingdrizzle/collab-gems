import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import gems from "../../asserts/images/gems.png";
import { BiUser } from "react-icons/bi";
import { RiLock2Line } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import "./styles.css"
import { Input, Typography, message } from "antd";


const LoginForm = () => {

    const { Title, Text } = Typography;


    return (
        <div className="login-card">
            <div className="card-header">
                <img src={gems} alt="company-logo" />
                <Title>Login</Title>
            </div>
            <div className="card-form">
                <Input className="login-text-box" required type="text" placeholder='Username' size="large" prefix={<BiUser size={25} />} />
                <Link onClick={() => message.success('Login Successfully',)} className={'login-btn'}>
                    <BiLogIn size={50} color={'#fff'} />
                </Link>
                <Input className="login-text-box" required type="password" placeholder='Password' size="large" prefix={<RiLock2Line size={25} />} />
            </div>
            <div className="card-links">
                <Link to={'recover-passord'} className='forgot-password'>
                    Forgot Password?
                </Link>
                <h3>Don&apos;t have an account?<Link to={'/register'}>Register</Link></h3>
            </div>


        </div>
    )
}

export default LoginForm;