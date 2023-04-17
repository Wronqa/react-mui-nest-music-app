import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../../components/common/navbar/Navbar';
import SignInForm from '../../features/authorization/components/SignInForm';
import AuthToolbar from '../../features/navigation/AuthToolbar';

const SignIn = () => {
	return (
		<div>
			<Navbar>
				<AuthToolbar />
			</Navbar>
			<Container component="main" maxWidth="xs">
				<SignInForm />
			</Container>
		</div>
	);
};

export default SignIn;
