import React, { useContext, useEffect } from 'react';
import { Api } from './tools/Api';
import { useMutation } from 'react-query';
import { checkAuthenticationService } from './services/authServices';
import Router from './routes/Router';
import { type AxiosError, type AxiosResponse } from 'axios';
import { AuthActions } from './shared/interfaces/auth.interface';
import AuthContext from './context/contexts/AuthContext';

function App() {
	const { dispatch: authDispatch } = useContext(AuthContext);
	const { mutate } = useMutation({
		mutationFn: checkAuthenticationService,
		onSuccess(response: AxiosResponse) {
			authDispatch({ type: AuthActions.LOAD_USER, payload: response.data });
		},
		onError(error: AxiosError) {
			console.log(error);
			authDispatch({ type: AuthActions.LOAD_USER, payload: '' });
		},
	});

	useEffect(() => {
		mutate();
	}, []);
	useEffect(() => {
		(async () => {
			await Api.initAxios();
		})();
	}, []);

	return <Router />;
}

export default App;
