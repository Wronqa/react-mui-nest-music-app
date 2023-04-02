import { Box, IconButton } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';

const CardControl = () => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', pl: 0.1, pb: 0.1 }}>
			<IconButton aria-label="previous">
				<PlayArrowIcon sx={{ height: 20, width: 20, color: 'green' }} />
			</IconButton>
			<IconButton aria-label="play/pause">
				{Math.floor(Math.random() * 2) + 1 === 1 ? (
					<FavoriteBorderIcon sx={{ height: 20, width: 20, color: 'red' }} />
				) : (
					<FavoriteIcon sx={{ height: 20, width: 20, color: 'red' }} />
				)}
			</IconButton>
			<IconButton aria-label="next">
				<DeleteForeverIcon sx={{ height: 20, width: 20, color: 'black' }} />
			</IconButton>
		</Box>
	);
};

export default CardControl;
