import React, { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
	const { state } = useContext(AuthContext);

	if (state.user) {
		return (
			<>
				<Outlet />
			</>
		);
	} else return <Navigate to="/auth/signin" replace />;
};

export default AuthRoute;
