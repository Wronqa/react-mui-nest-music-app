import { Box, IconButton } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PauseIcon from '@mui/icons-material/Pause';
import React, { useContext } from 'react';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import {
	CardControls,
	CardFunctions,
	SongInterface,
} from '../../shared/interfaces/song.interface';
import PlayerContext from '../../context/contexts/PlayerContext';

interface ISongStatus {
	isFavorite: boolean;
	isInQueue: boolean;
}
interface CardControlProps {
	controls: CardControls;
	controlFunctions: CardFunctions;
	status: ISongStatus;
	song: SongInterface;
}
const CardControl = ({
	controls,
	controlFunctions,
	song,
	status,
}: CardControlProps) => {
	const { dispatch: playerDispatch, state } = useContext(PlayerContext);

	const isPlaying = () => {
		if (
			+state.audioInitialState.curPlayId === +song.id &&
			state.audioInitialState.isPlaying
		)
			return true;
		else return false;
	};
	const isInQueue = () => {
		if (
			state.playlist.filter((s) => +s.id === +song.id).length &&
			state.playlist.length > 1
		)
			return true;
		else return false;
	};
	const canAddToQueue = () => {
		if (+state.audioInitialState.curPlayId !== +song.id) return true;
		else return false;
	};

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', pl: 0.1, pb: 0.1 }}>
			{controls.play && (
				<IconButton
					aria-label="previous"
					sx={{ pr: 0 }}
					onClick={controlFunctions.play}
				>
					{isPlaying() ? (
						<PauseIcon sx={{ height: 27, width: 27, color: 'green' }} />
					) : (
						<PlayArrowIcon sx={{ height: 27, width: 27, color: 'green' }} />
					)}
				</IconButton>
			)}

			{controls.addToQueue &&
				(canAddToQueue() && !state.audioInitialState.isPlaying ? (
					<IconButton
						aria-label="next"
						sx={{ pr: 0 }}
						onClick={
							!isInQueue()
								? controlFunctions.addToQueue
								: controlFunctions.deleteFromQueue
						}
					>
						{!isInQueue() ? (
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

			{controls.favorite && (
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
