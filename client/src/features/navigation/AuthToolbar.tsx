import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import CustomLink from '../../components/common/CustomLink';
import Logo from '../../components/common/Logo';

const AuthToolbar = () => {
	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Logo />
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
				<Typography
					sx={{ mr: 2, cursor: 'pointer' }}
					variant="button"
					color="inherit"
					component="div"
					fontSize={11}
				>
					<CustomLink text="Zarejestruj się!" path="../signup" />
				</Typography>
				<Button
					variant="contained"
					color="success"
					size="small"
					sx={{ fontSize: 11 }}
				>
					<CustomLink text="Zaloguj się" path="../signin" />
				</Button>
			</Box>
		</>
	);
};

export default AuthToolbar;
