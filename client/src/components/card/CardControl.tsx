import React, { useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PauseIcon from '@mui/icons-material/Pause';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import {
	type ICardControls,
	type ICardFunctions,
	type ISong,
} from '../../shared/interfaces/song.interface';
import PlayerContext from '../../context/contexts/PlayerContext';
import {
	isPlaying,
	canAddToQueue,
	isInQueue,
	isAnySongPlaying,
} from '../../features/songs/tools/songsControllers';

interface ISongStatus {
	isFavorite: boolean;
	isInQueue: boolean;
}
interface CardControlProps {
	controls: ICardControls;
	controlFunctions: ICardFunctions;
	status: ISongStatus;
	song: ISong;
}

const CardControl = ({
	controls,
	controlFunctions,
	song,
	status,
}: CardControlProps) => {
	const { state } = useContext(PlayerContext);

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', pl: 0.1, pb: 0.1 }}>
			{(controls.play ?? false) && (
				<IconButton
					aria-label="previous"
					sx={{ pr: 0 }}
					onClick={controlFunctions.play}
				>
					{isPlaying(state, song) ? (
						<PauseIcon sx={{ height: 27, width: 27, color: 'green' }} />
					) : (
						<PlayArrowIcon sx={{ height: 27, width: 27, color: 'green' }} />
					)}
				</IconButton>
			)}

			{(controls.addToQueue ?? false) &&
				(canAddToQueue(state, song) && isAnySongPlaying(state) ? (
					<IconButton
						aria-label="next"
						sx={{ pr: 0 }}
						onClick={
							!isInQueue(state, song)
								? controlFunctions.addToQueue
								: controlFunctions.deleteFromQueue
						}
					>
						{!isInQueue(state, song) ? (
							<PlaylistAddIcon sx={{ height: 27, width: 27, color: 'black' }} />
						) : (
							<PlaylistRemoveIcon
								sx={{ height: 27, width: 27, color: 'black' }}
							/>
						)}
					</IconButton>
				) : (
					<IconButton aria-label="next" sx={{ pr: 0 }}>
						<PlaylistAddIcon sx={{ height: 27, width: 27, color: 'gray' }} />
					</IconButton>
				))}

			{(controls.favorite ?? false) && (
				<IconButton
					aria-label="play/pause"
					sx={{ pr: 0 }}
					onClick={controlFunctions.like}
				>
					{!status.isFavorite ? (
						<FavoriteBorderIcon sx={{ height: 27, width: 27, color: 'red' }} />
					) : (
						<FavoriteIcon sx={{ height: 27, width: 27, color: 'red' }} />
					)}
				</IconButton>
			)}
			{(controls.remove ?? false) && (
				<IconButton aria-label="next" onClick={controlFunctions.remove}>
					<DeleteForeverIcon sx={{ height: 27, width: 27, color: 'black' }} />
				</IconButton>
			)}
			{(controls.add ?? false) && (
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
