import React, { useContext, useEffect, useState } from 'react';
import Form from '../../../components/common/Form';
import { TextField, Typography } from '@mui/material';
import { useValidate } from '../hooks/useValidate';
import { signInSchema } from '../schemas/signInSchema';
import { ACTIONS } from '../../../shared/interfaces/auth.interface';
import { LoginDataInterface } from '../../../shared/types';
import { ToastContainer, ToastContentProps, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-query';
import { signInService } from '../../../services/authServices';
import { AxiosError, AxiosResponse } from 'axios';
import { statusNotifier } from '../../../tools/statusNotifier';
import { AuthContext } from '../../../context/auth.context';
import { Navigate, useNavigate } from 'react-router-dom';
import Toast from '../../../components/toast/Toast';

const SignInForm = () => {
	const [data, setData] = useState<LoginDataInterface>({
		email: '',
		password: '',
	});
	const errors = useValidate(data as LoginDataInterface, signInSchema);
	const toastId = 'login';

	const { mutateAsync, isSuccess } = useMutation(signInService);
	const { state, dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const loginPromise = mutateAsync(data);

		await statusNotifier<AxiosResponse>(loginPromise, {
			pendingText: 'Logowanie...',
			successText: 'Zalogowano!',
			toastId,
		})
			.then((response: AxiosResponse) => {
				dispatch({ type: ACTIONS.loadUser, payload: { ...response.data } });
			})
			.catch((err) => console.log(err));
	};

	if (state.user) {
		navigate('../../home');
	}
	return (
		<Form handleClick={(e) => onSubmit(e)} text="Zaloguj się!">
			<TextField
				margin="normal"
				required
				fullWidth
				id="email"
				label="Adres email"
				name="email"
				autoComplete="email"
				autoFocus
				value={data.email}
				onChange={(e) => setData({ ...data, email: e.target.value })}
			/>

			<TextField
				margin="normal"
				required
				fullWidth
				name="password"
				label="Hasło"
				type="password"
				id="password"
				autoComplete="current-password"
				value={data.password}
				onChange={(e) => setData({ ...data, password: e.target.value })}
			/>
			<Typography sx={{ color: 'red', fontSize: '0.8rem' }}>
				{errors && errors[0]}
			</Typography>
			<Toast />
		</Form>
	);
};

export default SignInForm;
