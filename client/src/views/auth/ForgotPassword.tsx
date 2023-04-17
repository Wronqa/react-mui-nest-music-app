import React from 'react';
import { Container } from '@mui/material';
import Navbar from '../../components/common/navbar/Navbar';
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
