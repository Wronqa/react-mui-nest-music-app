import React, { useEffect, useState } from 'react';
import Form from '../../../components/common/Form';
import { TextField, Typography } from '@mui/material';
import { useValidate } from '../hooks/useValidate';
import { signInSchema } from '../schemas/signInSchema';
import { LoginDataInterface } from '../../../self_types/types';
import { ToastContainer, ToastContentProps, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-query';
import { signInService } from '../../../services/authService';
import { AxiosError, AxiosResponse } from 'axios';
import { statusHandler } from '../../../tools/statusHandler';

const SignInForm = () => {
	const [data, setData] = useState<LoginDataInterface>({
		email: '',
		password: '',
	});
	const errors = useValidate(data as LoginDataInterface, signInSchema);
	const toastId = 'login';

	const { mutateAsync } = useMutation(signInService);

	const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const loginPromise = mutateAsync(data);
		statusHandler<AxiosResponse>(loginPromise, {
			pendingText: 'Logowanie...',
			successText: 'Zalogowano!',
			toastId,
		});
	};

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
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</Form>
	);
};

export default SignInForm;
