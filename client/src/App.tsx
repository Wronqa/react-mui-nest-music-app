import React from 'react';
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom';
import SignIn from './views/auth/SignIn';
import SignUp from './views/auth/SignUp';
import { Container } from '@mui/material';
import ForgotPassword from './views/auth/ForgotPassword';
import Home from './views/home/Home';

const router = createBrowserRouter([
	{
		path: '/auth',
		children: [
			{ path: 'signin', element: <SignIn /> },
			{ path: 'signup', element: <SignUp /> },
			{ path: 'forgot', element: <ForgotPassword /> },
		],
	},
	{
		path: '/home',
		element: <Home />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
