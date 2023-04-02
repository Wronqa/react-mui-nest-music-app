import React from 'react';
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom';
import SignIn from './views/auth/SignIn';
import SignUp from './views/auth/SignUp';
import { Container } from '@mui/material';

const router = createBrowserRouter([
	{ path: '/signin', element: <SignIn /> },
	{ path: '/signup', element: <SignUp /> },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
