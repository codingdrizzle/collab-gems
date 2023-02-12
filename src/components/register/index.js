import React from 'react';
import { Typography,Col,Input } from 'antd';                                                                                                              
import {CgUserList} from 'react-icons/cg';
import {TfiEmail} from 'react-icons/tfi';
import {CiUser,CiLock } from 'react-icons/ci';
import img from '../../asserts/images/gems.png';
import './styles.css';

const Registration = ()=>{
    const {Title} = Typography;
    return(
        <div className='register-card'>
            <div className='register-header'>
                  <img className='logo' src={img} alt=''/>
                  <Title className='login-text' level={3}>Login</Title>
                  <Title className='register-text' level={1}>Register</Title>
            </div>
            <div className='register-form'>            
                  <Col span={24}>
                    <Input type='text' placeholder='First name' size='large' prefix={<CgUserList/>} required/> 
                  </Col>
                  <Col span={24}>
                    <Input type='text' placeholder='Last name' size='large' prefix={<CgUserList/>} required/> 
                  </Col>
                  <Col span={24}>
                    <Input type='text' placeholder='Email address' size='large' prefix={<TfiEmail/>} required/> 
                  </Col>
                  <Col span={24}>
                    <Input type='text' placeholder='Username' size='large' prefix={<CiUser/>} required/>
                  </Col>      
                  <Col span={24}>
                    <Input type='password' placeholder='Password' size='large' prefix={<CiLock/>} required/> 
                  </Col> 
                  <Col span={24}>
                    <Input type='password' placeholder='Re-enter Password' size='large' prefix={<CiLock/>} required/> 
                  </Col>                  
            </div>
        </div>
    );
};

export default Registration;