import React from 'react';
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom';
import SignIn from './views/auth/SignIn';
import SignUp from './views/auth/SignUp';
import { Container } from '@mui/material';
import ForgotPassword from './views/auth/ForgotPassword';
import Home from './views/home/Home';
import Favorites from './views/home/Favorites';
import SongsContainer from './features/songs/components/SongsContainer';
import Manage from './views/admin/Manage';
import { Api } from './tools/Api';
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient();

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
	{
		path: '/favorites',
		element: <Favorites />,
	},
	{
		path: '/admin',
		element: <Manage />,
	},
]);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />;
		</QueryClientProvider>
	);
}

export default App;
