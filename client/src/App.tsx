import { useContext, useEffect } from 'react';
import { Api } from './tools/Api';
import { useMutation } from 'react-query';
import { checkAuthenticationService } from './services/authServices';
import Router from './routes/Router';
import { AxiosError, AxiosResponse } from 'axios';
import { GlobalContext } from './context/GlobalContext';
import { AUTH_ACTIONS } from './shared/interfaces/auth.interface';

function App() {
	const { authDispatch } = useContext(GlobalContext);
	const { mutate, isSuccess } = useMutation({
		mutationFn: checkAuthenticationService,
		onSuccess(response: AxiosResponse) {
			authDispatch({ type: AUTH_ACTIONS.loadUser, payload: response.data });
		},
		onError(error: AxiosError) {
			console.log(error);
			authDispatch({ type: AUTH_ACTIONS.loadUser, payload: '' });
		},
	});

	console.log('Re render');

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
