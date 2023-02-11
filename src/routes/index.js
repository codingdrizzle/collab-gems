import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Registration from '../components/register';
import Homepage from '../pages/home-page';
import LoginPage from '../pages/login-page';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage/>}/>
			<Route path='/login' element={<LoginPage/>}/>
			<Route path='/register' element={<Registration/>}/>
		</Routes>
	);
};

export default AppRoutes;