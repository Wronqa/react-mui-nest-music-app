import { Box, IconButton } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PauseIcon from '@mui/icons-material/Pause';
import React from 'react';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import {
	CardControls,
	CardFunctions,
} from '../../shared/interfaces/song.interface';

interface CardControlProps {
	controls: CardControls;
	controlFunctions: CardFunctions;
	isFavorite: boolean;
	isPlaying: boolean;
}
const CardControl = ({
	controls,
	controlFunctions,
	isFavorite,
	isPlaying,
}: CardControlProps) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', pl: 0.1, pb: 0.1 }}>
			{controls.play && (
				<IconButton
					aria-label="previous"
					sx={{ pr: 0 }}
					onClick={controlFunctions.play}
				>
					{isPlaying ? (
						<PauseIcon sx={{ height: 27, width: 27, color: 'green' }} />
					) : (
						<PlayArrowIcon sx={{ height: 27, width: 27, color: 'green' }} />
					)}
				</IconButton>
			)}
			{controls.addToQueue && (
				<IconButton
					aria-label="next"
					sx={{ pr: 0 }}
					onClick={controlFunctions.addToQueue}
				>
					<PlaylistAddIcon sx={{ height: 27, width: 27, color: 'blue' }} />
				</IconButton>
			)}

			{controls.favorite && (
				<IconButton
					aria-label="play/pause"
					sx={{ pr: 0 }}
					onClick={controlFunctions.like}
				>
					{!isFavorite ? (
						<FavoriteBorderIcon sx={{ height: 27, width: 27, color: 'red' }} />
					) : (
						<FavoriteIcon sx={{ height: 27, width: 27, color: 'red' }} />
					)}
				</IconButton>
			)}
			{controls.remove && (
				<IconButton aria-label="next" onClick={controlFunctions.remove}>
					<DeleteForeverIcon sx={{ height: 27, width: 27, color: 'black' }} />
				</IconButton>
			)}
			{controls.add && (
				<IconButton
					aria-label="next"
					sx={{ pr: 0 }}
					onClick={controlFunctions.add}
				>
					<AddCircleOutlineIcon
						sx={{ height: 27, width: 27, color: 'black' }}
					/>
				</IconButton>
			)}
		</Box>
	);
};

export default CardControl;
