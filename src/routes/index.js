import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import RegistrationPage from '../pages/registration-page';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage/>}/>
			<Route path='/login' element={<LoginPage/>}/>
			<Route path='/register' element={<RegistrationPage/>}/>
		</Routes>
	);
};

export default AppRoutes;