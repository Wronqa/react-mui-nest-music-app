import { Box, Typography, Button, Container } from '@mui/material';
import React from 'react';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import SignInForm from '../../features/authorization/components/SignInForm';
import ForgotPasswordForm from '../../features/authorization/components/ForgotPasswordForm';
import AuthToolbar from '../../features/navigation/AuthToolbar';

const ForgotPassword = () => {
	return (
		<div>
			<Navbar>
				<AuthToolbar />
			</Navbar>
			<Container component="main" maxWidth="xs">
				<ForgotPasswordForm />
			</Container>
		</div>
	);
};

export default ForgotPassword;
