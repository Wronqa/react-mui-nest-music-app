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
			<Typography component="div" variant="body2" sx={{ fontSize: '0.8rem' }}>
				{title}
			</Typography>
			<Typography
				variant="caption"
				color="text.secondary"
				sx={{ fontSize: '0.7rem' }}
				component="div"
			>
				{artist.name}
			</Typography>
		</CardContent>
	);
};

export default CardHeader;
