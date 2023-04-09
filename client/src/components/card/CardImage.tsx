import { CardMedia } from '@mui/material';
import React from 'react';

interface CardImageProps {
	picture: string;
}
const CardImage = ({ picture }: CardImageProps) => {
	return (
		<CardMedia
			component="img"
			sx={{ width: '100%' }}
			image={picture}
			alt="Live from space album cover"
		/>
	);
};

export default CardImage;
