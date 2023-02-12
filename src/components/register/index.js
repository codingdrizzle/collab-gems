import React from 'react';
import { Typography } from 'antd';
import { Col} from 'antd';
import {CgUserList} from 'react-icons/cg';
import {TfiEmail} from 'react-icons/tfi';
import {CiUser,CiLock} from 'react-icons/ci';
import img from '../../asserts/images/gems.png';
import './styles.css';

const Registration = ()=>{
    const {Title} = Typography;
    return(
        <div className="register-card">
            <div className="register-header">
                  <img className="logo" src={img} alt=""/>
                  <Title className="login-text" level={3}>Login</Title>
                  <Title className="register-text" level={1}>Register</Title>
            </div>
            <div className="register-form">
            
                  <Col span={6}>24</Col>
                  <Col span={6}>24</Col>
                  <Col span={6}>24</Col>
                  <Col span={6}>24</Col>
            
            </div>
        </div>
    )
};

export default Registration;