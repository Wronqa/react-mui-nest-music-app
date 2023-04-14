import { Box, IconButton } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react';
import {
	CardControls,
	CardFunctions,
} from '../../shared/interfaces/song.interface';

interface CardControlProps {
	controls: CardControls;
	controlFunctions: CardFunctions;
	isFavorite: boolean;
}
const CardControl = ({
	controls,
	controlFunctions,
	isFavorite,
}: CardControlProps) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', pl: 0.1, pb: 0.1 }}>
			{controls.play && (
				<IconButton aria-label="previous">
					<PlayArrowIcon sx={{ height: 30, width: 30, color: 'green' }} />
				</IconButton>
			)}
			{controls.favorite && (
				<IconButton aria-label="play/pause" onClick={controlFunctions.like}>
					{!isFavorite ? (
						<FavoriteBorderIcon sx={{ height: 30, width: 30, color: 'red' }} />
					) : (
						<FavoriteIcon sx={{ height: 30, width: 30, color: 'red' }} />
					)}
				</IconButton>
			)}
			{controls.remove && (
				<IconButton aria-label="next" onClick={controlFunctions.remove}>
					<DeleteForeverIcon sx={{ height: 30, width: 30, color: 'black' }} />
				</IconButton>
			)}
			{controls.add && (
				<IconButton aria-label="next" onClick={controlFunctions.add}>
					<AddCircleOutlineIcon
						sx={{ height: 30, width: 30, color: 'black' }}
					/>
				</IconButton>
			)}
		</Box>
	);
};

export default CardControl;
