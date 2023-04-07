import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { ArtistInterface } from '../../shared/interfaces/song.interface';

interface CardHeaderProp {
	title: string;
	artist: ArtistInterface;
}
const CardHeader = ({ title, artist }: CardHeaderProp) => {
	return (
		<CardContent sx={{ flex: '1 0 auto', p: 1 }}>
			<Typography
				component="div"
				variant="body2"
				sx={{ fontSize: '1.5rem' }} //0.8
			>
				{title}
			</Typography>
			<Typography
				variant="caption"
				color="text.secondary"
				sx={{ fontSize: '1rem' }} ///0.7
				component="div"
			>
				{artist.name}
			</Typography>
		</CardContent>
	);
};

export default CardHeader;
