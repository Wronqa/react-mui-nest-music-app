import { useContext, useEffect } from 'react';
import {
	createBrowserRouter,
	Form,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
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
import React from 'react';
import { AuthContext } from './context/auth.context';
import { checkAuthenticationService } from './services/authServices';
import { ACTIONS } from './shared/interfaces/auth.interface';

function App() {
	const { state } = useContext(AuthContext);
	const { dispatch } = useContext(AuthContext);
	const mutation = useMutation({
		mutationFn: checkAuthenticationService,
		onSuccess(response, variables, context) {
			dispatch({ type: ACTIONS.loadUser, payload: response.data });
		},
	});

	useEffect(() => {
		mutation.mutate();
	}, []);

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
			element: state.user ? <Home /> : <Navigate to="/auth/signin" replace />,
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

	useEffect(() => {
		(async () => {
			await Api.initAxios();
		})();
	}, []);

	return <RouterProvider router={router} />;
}

export default App;
