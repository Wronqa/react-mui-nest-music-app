import { CardMedia } from '@mui/material';
import React from 'react';
import { AlbumInterface } from '../../shared/interfaces/song.interface';

interface CardImageProps {
	album: AlbumInterface;
}
const CardImage = ({ album }: CardImageProps) => {
	return (
		<CardMedia
			component="img"
			sx={{ width: 85 }}
			image={album.cover}
			alt="Live from space album cover"
		/>
	);
};

export default CardImage;
