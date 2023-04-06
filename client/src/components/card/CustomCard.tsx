import React from 'react';

import {
	Box,
	CardContent,
	Typography,
	IconButton,
	CardMedia,
	Card,
} from '@mui/material';
import { link } from 'fs';
import CardHeader from './CardHeader';
import CardControl from './CardControl';
import CardImage from './CardImage';
import { SongInterface } from '../../shared/interfaces/song.interface';

interface CustomCardProps {
	song: SongInterface;
}
const CustomCard = ({ song }: CustomCardProps) => {
	return (
		<Card sx={{ display: 'flex', mr: 2, mt: 2, backgroundColor: '#f3f2ed' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardHeader title={song.title} artist={song.artist} />
				<CardControl />
			</Box>
			<CardImage album={song.album} />
		</Card>
	);
};

export default CustomCard;
