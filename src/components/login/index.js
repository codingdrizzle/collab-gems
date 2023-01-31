import React from "react";
import { Link } from 'react-router-dom';
import gems from "../../asserts/images/gems.png";
import { BiUser } from "react-icons/bi";
import { RiLock2Line } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import "./styles.css";
import { Input, Typography } from "antd";

const LoginForm = () => {

    const { Title } = Typography;

    return (
        <div className="login-card">
            <div className="card-header">
                <img src={gems} alt="company-logo" />;
                <Title level={3} className="title">Login</Title>;
            </div>;
            <div className="card-form">
                <Input className="login-text-box1" required type="text" placeholder='Username' size="medium" prefix={<BiUser color="" size={25} />} />;
                <Link to={'/'} className={'login-btn'}>
                    <BiLogIn size={50} color={'#fff'} />;
                </Link>
                <Input className="login-text-box2" required type="password" placeholder='Password' size="medium" prefix={<RiLock2Line size={25} />} />;
            </div>;
            <div className="card-links">
                <Link to={'recover-passord'} className='forgot-password'>
                    Forgot Password?
                </Link>;
                <Title level={5}>Don&apos;t have an account?      <Link className="register" to={'/register'}>Register</Link></Title>;

            </div>

        </div>
    )
}

export default LoginForm;

