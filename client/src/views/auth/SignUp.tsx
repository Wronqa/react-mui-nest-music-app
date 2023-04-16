import React from 'react';
import { Container } from '@mui/material';
import Navbar from '../../components/common/Navbar';
import SignUpForm from '../../features/authorization/components/SignUpForm';
import AuthToolbar from '../../features/navigation/AuthToolbar';

const SignUp = () => {
	return (
		<div>
			<Navbar>
				<AuthToolbar />
			</Navbar>
			<Container component="main" maxWidth="xs">
				<SignUpForm />
			</Container>
		</div>
	);
};

export default SignUp;
