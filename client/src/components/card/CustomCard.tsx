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
		<Card
			sx={{
				display: 'flex',
				mr: 3,
				mt: 2,
				backgroundColor: '#f3f2ed',
				width: '18%',
				height: '2%',
				cursor: 'pointer',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100% ',
				}}
			>
				<CardHeader title={song.title} artist={song.artist} />
				<CardControl />
			</Box>
			<CardImage picture={song.picture} />
		</Card>
	);
};

export default CustomCard;
