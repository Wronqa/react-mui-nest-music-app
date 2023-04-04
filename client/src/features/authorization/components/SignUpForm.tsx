import React, { useEffect, useState } from 'react';
import Form from '../../../components/common/Form';
import { TextField, Typography } from '@mui/material';
import { useValidate } from '../hooks/useValidate';
import { signInSchema } from '../schemas/signInSchema';
import {
	LoginDataInterface,
	RegisterDataInterface,
} from '../../../self_types/types';
import { signUpSchema } from '../schemas/signUpSchema';
import { useMutation } from 'react-query';
import { signUpService } from '../../../services/authService';
import {
	ToastContainer,
	ToastContent,
	ToastContentProps,
	toast,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from 'axios';

const SignUpForm = () => {
	const [data, setData] = useState<RegisterDataInterface>({
		username: '',
		email: '',
		password: '',
		passwordConfirmation: '',
	});

	const errors = useValidate(data as RegisterDataInterface, signUpSchema);
	const toastId = 'register';

	const { mutateAsync } = useMutation(signUpService);

	const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const myPromise = mutateAsync(data);
		toast.promise(
			myPromise,
			{
				pending: 'Rejestracja...',
				success: 'Rejestracja zakończona sukcesem',
				error: {
					render({ data }: ToastContentProps<AxiosError>) {
						const data3 = data?.response?.data;
						return (data3 as { message: string }).message;
					},
				},
			},
			{ toastId }
		);
	};

	return (
		<Form handleClick={(e) => onSubmit(e)} text="Zarejestruj się!">
			<TextField
				margin="normal"
				required
				fullWidth
				name="Username"
				label="Nazwa użytkownika"
				type="username"
				id="username"
				value={data.username}
				onChange={(e) => setData({ ...data, username: e.target.value })}
			/>
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
			<TextField
				margin="normal"
				required
				fullWidth
				name="passwordConfirmation"
				label="Powtórz hasło"
				type="password"
				id="passwordConfirmation"
				value={data.passwordConfirmation}
				onChange={(e) =>
					setData({ ...data, passwordConfirmation: e.target.value })
				}
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

export default SignUpForm;
