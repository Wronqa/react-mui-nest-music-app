import { Box, IconButton } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react';

interface CardControlProps {
	play?: boolean;
	add?: boolean;
	favorite?: boolean;
	remove?: boolean;
}
const CardControl = ({
	play = true,
	add,
	favorite,
	remove,
}: CardControlProps) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', pl: 0.1, pb: 0.1 }}>
			{play && (
				<IconButton aria-label="previous">
					<PlayArrowIcon sx={{ height: 30, width: 30, color: 'green' }} />
				</IconButton>
			)}
			<IconButton aria-label="play/pause">
				{Math.floor(Math.random() * 2) + 1 === 1 ? (
					<FavoriteBorderIcon sx={{ height: 30, width: 30, color: 'red' }} />
				) : (
					<FavoriteIcon sx={{ height: 30, width: 30, color: 'red' }} />
				)}
			</IconButton>
			<IconButton aria-label="next">
				<DeleteForeverIcon sx={{ height: 30, width: 30, color: 'black' }} />
			</IconButton>
			{add && (
				<IconButton aria-label="next">
					<AddCircleOutlineIcon
						sx={{ height: 30, width: 30, color: 'black' }}
					/>
				</IconButton>
			)}
		</Box>
	);
};

export default CardControl;
