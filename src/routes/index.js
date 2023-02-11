import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from '../pages/home-page';
import LoginPage from '../pages/login-page';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage/>}/>
			<Route path='/login' element={<LoginPage/>}/>
			
		</Routes>
	);
};

export default AppRoutes;