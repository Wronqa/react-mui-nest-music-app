import { Box, Typography, Button, Container } from '@mui/material';
import React from 'react';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import Form from '../../components/common/Form';
import SignInForm from '../../features/authorization/components/SignInForm';
import SignUpForm from '../../features/authorization/components/SignUpForm';
import AuthToolbar from '../../features/authorization/components/AuthToolbar';

const SignUp = () => {
	return (
		<div>
			<AuthToolbar />
			<Container component="main" maxWidth="xs">
				<SignUpForm />
			</Container>
		</div>
	);
};

export default SignUp;
