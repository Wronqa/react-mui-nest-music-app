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

const CustomCard = () => {
	return (
		<Card sx={{ display: 'flex', mr: 2, mt: 2, backgroundColor: '#f3f2ed' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardHeader />
				<CardControl />
			</Box>
			<CardImage />
		</Card>
	);
};

export default CustomCard;
