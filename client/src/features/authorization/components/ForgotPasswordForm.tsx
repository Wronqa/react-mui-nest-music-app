import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { forgotPasswordSchema } from '../schemas/forgotPasswordSchema';
import { useValidate } from '../hooks/useValidate';
import Form from '../../../components/common/Form';
import { ForgotPasswordInterface } from '../../../shared/types';

const ForgotPasswordForm = () => {
	const [email, setEmail] = useState<string>('');

	const errors = useValidate(
		{ email } as ForgotPasswordInterface,
		forgotPasswordSchema
	);

	const onSend = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	return (
		<Form
			handleClick={(e) => onSend(e)}
			text="Przypomnij hasło!"
			options={{ signup: false, forgotPassword: false }}
		>
			<TextField
				margin="normal"
				required
				fullWidth
				id="email"
				label="Adres email"
				name="email"
				autoComplete="email"
				autoFocus
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Typography sx={{ color: 'red', fontSize: '0.8rem' }}>
				{errors && errors[0]}
			</Typography>
		</Form>
	);
};

export default ForgotPasswordForm;
