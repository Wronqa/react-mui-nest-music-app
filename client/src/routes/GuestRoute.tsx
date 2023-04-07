import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const GuestRoute = () => {
	const { state } = useContext(AuthContext);
	if (!state.user) {
		return <Outlet />;
	} else return <Navigate to="/home" replace />;
};

export default GuestRoute;
