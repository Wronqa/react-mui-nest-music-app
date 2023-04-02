import { ThemeProvider } from '@emotion/react';
import {
	AppBar,
	Box,
	Button,
	Toolbar,
	Typography,
	createTheme,
} from '@mui/material';
import Logo from './Logo';
import { ReactNode } from 'react';

interface NavbarProps {
	children: ReactNode;
}
const Navbar = ({ children }: NavbarProps) => {
	const darkTheme = createTheme({
		palette: {
			primary: {
				main: 'rgb(27, 18, 18)',
			},
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<AppBar position="static" color="primary" enableColorOnDark>
				<Toolbar
					variant="dense"
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					{children}
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
};

export default Navbar;
