import { CardMedia } from '@mui/material';
import React from 'react';

const CardImage = () => {
	return (
		<CardMedia
			component="img"
			sx={{ width: 85 }}
			image={
				'https://res.cloudinary.com/dr89d8ldb/image/upload/v1/Content%20-%20wewnetrzne%20Going.%20/SBM/profile/white_17-2_s0cykp'
			}
			alt="Live from space album cover"
		/>
	);
};

export default CardImage;
