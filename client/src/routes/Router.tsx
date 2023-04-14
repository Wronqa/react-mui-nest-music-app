import React, { useContext } from 'react';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import ForgotPassword from '../views/auth/ForgotPassword';
import SignIn from '../views/auth/SignIn';
import SignUp from '../views/auth/SignUp';
import GuestRoute from './GuestRoute';
import Home from '../views/home/Home';
import AuthRoute from './AuthRoute';
import { GlobalContext } from '../context/GlobalContext';
import Favorites from '../views/home/Favorites';

const Router = () => {
	const { authState } = useContext(GlobalContext);

	if (authState.user === null) return <></>;
	const router = createBrowserRouter([
		{
			path: '/auth',
			element: <GuestRoute />,
			children: [
				{
					path: '',
					element: <Navigate to="/auth/signin" replace />,
				},
				{
					path: 'signin',
					element: <SignIn />,
				},
				{ path: 'signup', element: <SignUp /> },
				{ path: 'forgot', element: <ForgotPassword /> },
			],
		},
		{
			path: '/',
			element: <AuthRoute />,
			children: [
				{
					path: '/',
					element: <Navigate to="/home" replace />,
				},
				{
					path: '/home',
					element: <Home />,
				},
				{
					path: '/favorities',
					element: <Home />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
