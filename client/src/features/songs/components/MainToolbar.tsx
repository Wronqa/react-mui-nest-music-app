import React from 'react';
import Navbar from '../../../components/common/Navbar';
import CustomLink from '../../../components/common/CustomLink';
import {
	Box,
	Typography,
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	OutlinedInput,
} from '@mui/material';
import Logo from '../../../components/common/Logo';
import SearchBox from './SearchBox';

const MainToolbar = () => {
	return (
		<Navbar>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Logo />
				<Typography
					sx={{ ml: 5 }}
					variant="caption"
					letterSpacing={1}
					color="inherit"
					component="div"
				>
					Biblioteka
				</Typography>
				<Typography
					sx={{ ml: 2 }}
					variant="caption"
					letterSpacing={1}
					color="inherit"
					component="div"
				>
					Ulubione
				</Typography>
				<SearchBox />
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
				<Typography
					sx={{ mr: 2, cursor: 'pointer' }}
					variant="button"
					color="inherit"
					component="div"
					fontSize={11}
				>
					Wyloguj
				</Typography>
			</Box>
		</Navbar>
	);
};

export default MainToolbar;
