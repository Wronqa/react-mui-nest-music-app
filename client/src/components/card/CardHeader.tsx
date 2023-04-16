import React from 'react';
import { CardContent, Typography } from '@mui/material';

interface CardHeaderProp {
	title: string;
	artist: string;
}
const CardHeader = ({ title, artist }: CardHeaderProp) => {
	return (
		<CardContent sx={{ flex: '1 0 auto', p: 1 }}>
			<Typography
				component="div"
				variant="body2"
				sx={{ maxfontSize: '1.5rem' }}
			>
				{title.slice(0, 10)}
			</Typography>
			<Typography
				variant="caption"
				color="text.secondary"
				sx={{ fontSize: '1rem' }}
				component="div"
			>
				{artist.slice(0, 10)}
			</Typography>
		</CardContent>
	);
};

export default CardHeader;
