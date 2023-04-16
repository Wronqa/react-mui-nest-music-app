import React, { type ReactNode, useContext } from 'react';
import CustomLink from '../../components/common/CustomLink';
import { Box, Typography } from '@mui/material';
import Logo from '../../components/common/Logo';
import SearchBox from '../../components/common/SearchBox';
import { useMutation } from 'react-query';
import { logoutService } from '../../services/authServices';
import { AuthActions } from '../../shared/interfaces/auth.interface';
import AuthContext from '../../context/contexts/AuthContext';

interface HomeToolbarProps {
	children?: ReactNode;
	onSearch?: (query: string) => Promise<void>;
}
const HomeToolbar = ({ children, onSearch }: HomeToolbarProps) => {
	const { dispatch: authDispatch } = useContext(AuthContext);

	const mutation = useMutation({
		mutationFn: logoutService,
		onSuccess(response, variables, context) {
			authDispatch({ type: AuthActions.LOAD_USER, payload: response.data });
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
					<CustomLink path="/home" text={'Biblioteka'} />
				</Typography>

				<Typography
					sx={{ ml: 2 }}
					variant="caption"
					letterSpacing={1}
					color="inherit"
					component="div"
				>
					<CustomLink path="/favorities" text={'Ulubione'} />
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
