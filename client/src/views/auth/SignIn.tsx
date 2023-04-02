import { Box, Typography, Button, Container } from '@mui/material';
import React from 'react';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import Form from '../../components/common/Form';
import SignInForm from '../../features/authorization/components/SignInForm';

const SignIn = () => {
	return (
		<div>
			<Navbar>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Logo />
				</Box>
				<Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
					<Typography
						sx={{ mr: 2 }}
						variant="button"
						color="inherit"
						component="div"
						fontSize={11}
					>
						Zarejestruj się
					</Typography>
					<Button
						variant="contained"
						color="success"
						size="small"
						sx={{ fontSize: 11 }}
					>
						Zaloguj sie
					</Button>
				</Box>
			</Navbar>
			<Container component="main" maxWidth="xs">
				<SignInForm />
			</Container>
		</div>
	);
};

export default SignIn;
