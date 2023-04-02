import { Box, Typography, Button, Container } from '@mui/material';
import React from 'react';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import Form from '../../components/common/Form';
import SignInForm from '../../features/authorization/components/SignInForm';
import { Link } from 'react-router-dom';
import CustomLink from '../../components/common/CustomLink';
import AuthToolbar from '../../features/authorization/components/AuthToolbar';

const SignIn = () => {
	return (
		<div>
			<AuthToolbar />
			<Container component="main" maxWidth="xs">
				<SignInForm />
			</Container>
		</div>
	);
};

export default SignIn;
