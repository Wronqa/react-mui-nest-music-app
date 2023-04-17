import React, { type ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppBar, Toolbar, createTheme } from '@mui/material';

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
						height: '7vh',
					}}
				>
					{children}
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
};

export default Navbar;
