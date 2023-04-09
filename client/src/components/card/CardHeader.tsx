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
				sx={{ maxfontSize: '1.5rem' }} //0.8
			>
				{title}
			</Typography>
			<Typography
				variant="caption"
				color="text.secondary"
				sx={{ fontSize: '1rem' }} ///0.7
				component="div"
			>
				{artist}
			</Typography>
		</CardContent>
	);
};

export default CardHeader;
