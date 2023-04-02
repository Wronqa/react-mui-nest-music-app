import React from 'react';
import { CardContent, Typography } from '@mui/material';

const CardHeader = () => {
	return (
		<CardContent sx={{ flex: '1 0 auto', p: 1 }}>
			<Typography component="div" variant="body2" sx={{ fontSize: '0.8rem' }}>
				Live From Space
			</Typography>
			<Typography
				variant="caption"
				color="text.secondary"
				sx={{ fontSize: '0.7rem' }}
				component="div"
			>
				Mac Miller
			</Typography>
		</CardContent>
	);
};

export default CardHeader;
