import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
	const { authState } = useContext(GlobalContext);

	if (authState.user) {
		return (
			<>
				<Outlet />
			</>
		);
	} else return <Navigate to="/auth/signin" replace />;
};

export default AuthRoute;
