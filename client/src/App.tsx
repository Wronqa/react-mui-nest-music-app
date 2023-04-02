import React from 'react';
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom';
import SignIn from './views/auth/SignIn';

const router = createBrowserRouter([{ path: '/signin', element: <SignIn /> }]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
