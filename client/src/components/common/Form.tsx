import { Box, Button, Grid, Link, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface SignInFormProps {
	children: ReactNode;
	handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	text: string;
}
const Form = ({ children, handleClick, text }: SignInFormProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '85vh',
			}}
		>
			<Typography component="h1" variant="h5">
				{text}
			</Typography>
			<Box
				component="form"
				noValidate
				sx={{
					mt: 1,
					display: 'flex',
					flexDirection: 'column',
					minWidth: '400px',
				}}
			>
				{children}
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 2, mb: 2 }}
					color="success"
					onClick={handleClick}
				>
					{text}
				</Button>
				<Grid container>
					<Grid item xs>
						<Link href="#" color="#000" variant="body2">
							Zapomniałeś hasła?
						</Link>
					</Grid>
					<Grid item>
						<Link href="#" color="#000" variant="body2">
							{'Nie masz konta? Zarejestruj się!'}
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Form;
