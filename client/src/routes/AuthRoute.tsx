import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/contexts/AuthContext';

const AuthRoute = () => {
	const { state: authState } = useContext(AuthContext);

	if (authState.user) {
		return (
			<>
				<Outlet />
			</>
		);
	} else return <Navigate to="/auth/signin" replace />;
};

export default AuthRoute;
