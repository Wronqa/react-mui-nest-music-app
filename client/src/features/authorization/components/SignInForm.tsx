import React, { useEffect, useState } from 'react';
import Form from '../../../components/common/Form';
import { TextField, Typography } from '@mui/material';
import { useValidate } from '../hooks/useValidate';
import { signInSchema } from '../schemas/signInSchema';
import { LoginDataInterface } from '../../../self_types/types';

const SignInForm = () => {
	const [data, setData] = useState<LoginDataInterface>({
		email: '',
		password: '',
	});

	const errors = useValidate(data as LoginDataInterface, signInSchema);

	console.log(errors);
	const onSend = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	// (async () => {
	// 	const user = await userSchema.validate(data);
	// 	console.log(user);
	// })();

	return (
		<Form handleClick={(e) => onSend(e)} text="Zaloguj się!">
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
		</Form>
	);
};

export default SignInForm;
