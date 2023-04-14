import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const GuestRoute = () => {
	const { authState } = useContext(GlobalContext);

	if (!authState.user) {
		return <Outlet />;
	} else return <Navigate to="/home" replace />;
};

export default GuestRoute;
