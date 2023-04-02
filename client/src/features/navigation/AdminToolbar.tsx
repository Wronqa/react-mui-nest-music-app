import React from 'react';
import HomeToolbar from './HomeToolbar';
import { Typography } from '@mui/material';

const AdminToolbar = () => {
	return (
		<HomeToolbar>
			<Typography
				sx={{ mr: 2, cursor: 'pointer' }}
				variant="button"
				color="inherit"
				component="div"
				fontSize={11}
			>
				Admin
			</Typography>
		</HomeToolbar>
	);
};

export default AdminToolbar;
