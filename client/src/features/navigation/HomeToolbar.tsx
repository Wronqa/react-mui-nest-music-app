import React, { ReactNode, useContext } from 'react';
import Navbar from '../../components/common/Navbar';
import CustomLink from '../../components/common/CustomLink';
import {
	Box,
	Typography,
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	OutlinedInput,
} from '@mui/material';
import Logo from '../../components/common/Logo';
import SearchBox from '../../components/common/SearchBox';
import { useMutation } from 'react-query';
import { logoutService } from '../../services/authServices';
import { ACTIONS } from '../../shared/interfaces/auth.interface';
import { AuthContext } from '../../context/auth.context';

interface HomeToolbarProps {
	children?: ReactNode;
	onSearch?: (query: string) => void;
}
const HomeToolbar = ({ children, onSearch }: HomeToolbarProps) => {
	const { state, dispatch } = useContext(AuthContext);
	console.log(state);
	const mutation = useMutation({
		mutationFn: logoutService,
		onSuccess(response, variables, context) {
			dispatch({ type: ACTIONS.loadUser, payload: response.data });
		},
	});

	const logoutHandler = () => {
		mutation.mutate();
	};
	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Logo />

				<Typography
					sx={{ ml: 5 }}
					variant="caption"
					letterSpacing={1}
					color="inherit"
					component="div"
				>
					<CustomLink path="/" text={'Biblioteka'} />
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
				<SearchBox onSearch={onSearch} />
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
				{children}
				<Typography
					sx={{ mr: 2, cursor: 'pointer' }}
					variant="button"
					color="inherit"
					component="div"
					fontSize={11}
					onClick={logoutHandler}
				>
					Wyloguj
				</Typography>
			</Box>
		</>
	);
};

export default HomeToolbar;
