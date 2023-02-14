import React from 'react';
import { Typography,Col,Input,Button,} from 'antd';                                                                                                              
import {CgUserList} from 'react-icons/cg';
import {TfiEmail} from 'react-icons/tfi';
import {BiCheck} from 'react-icons/bi';                                                                                                         
import {CiUser,CiLock } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import img from '../../asserts/images/gems.png';
import './styles.css';
import './mediaqueries.css';

const Registration = ()=>{
    const {Title} = Typography;
    return(
        <div className='register-card'>
            <div className='register-header'>
                  <img className='logo' src={img} alt=''/>
                  <Link to={'/login'} className='login-link'><Title level={3} className='login-text'>Login</Title> </Link>
                  <Title className='register-text' level={1}>Register</Title>
            </div>
            <div className='register-form'> 
                  <div className='colom-cards'>
                          <Col className='coloms' span={24}>
                            <Input className='input-card' type='text' placeholder='First name' size='large' prefix={<CgUserList size={25} className='icons'/>} required/> 
                          </Col>
                          <Col className='coloms' span={24}>
                            <Input className='input-card' type='text' placeholder='Last name' size='large' prefix={<CgUserList size={25} className='icons'/>} required/> 
                          </Col>
                          <Col className='coloms' span={24}>
                            <Input className='input-card' type='text' placeholder='Email address' size='large' prefix={<TfiEmail size={25} className='icons'/>} required/> 
                          </Col>
                          <Col className='coloms' span={24}>
                            <Input className='input-card' type='text' placeholder='Username' size='large' prefix={<CiUser size={25} className='icons'/>} required/>
                          </Col>      
                          <Col className='coloms' span={24}>
                            <Input className='input-card' type='password' placeholder='Password' size='large' prefix={<CiLock size={25} className='icons'/>} required/> 
                          </Col> 
                          <Col className='coloms' span={24}>
                            <Input className='input-card' type='password' placeholder='Re-enter Password' size='large' prefix={<CiLock size={25} className='icons'/>} required/> 
                          </Col> 
                        <Button><BiCheck className='register-icon' size={30}/></Button>  
                  </div>                                                           
            </div>
            <Title id='question' level={5}>Have an account already?</Title>
        </div>
    );
};

export default Registration;