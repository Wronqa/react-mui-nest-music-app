import React, { useState, useContext } from 'react';

import { Box, Card } from '@mui/material';
import CardHeader from './CardHeader';
import CardControl from './CardControl';
import CardImage from './CardImage';
import {
	ICardControls,
	ICardFunctions,
	SongsActions,
	ISong,
	ISongsViewType,
} from '../../shared/interfaces/song.interface';
import { filterControls } from '../../features/songs/tools/cardControlFilter';
import { useMutation } from 'react-query';
import {
	addSongToLibrary,
	deleteSongFromLibrary,
	likeSong,
} from '../../services/songService';
import { AxiosError, AxiosResponse } from 'axios';
import { statusNotifier } from '../../tools/statusNotifier';
import PlayerContext from '../../context/contexts/PlayerContext';
import { PlayerActions } from '../../shared/interfaces/player.interface';
import { SongsContext } from '../../context/contexts/SongsContext';

interface CustomCardProps {
	song: ISong;
	type: ISongsViewType;
}
const CustomCard = ({ song, type }: CustomCardProps) => {
	const [isFavorite, setIsFavorite] = useState(song.isFavorite);
	const { mutateAsync: addSongMutation } = useMutation(addSongToLibrary);

	const { dispatch: songsDispatch } = useContext(SongsContext);
	const { dispatch: playerDispatch, state } = useContext(PlayerContext);
	console.log(state);

	const deleteFromQueueHandler = () => {
		playerDispatch({
			type: PlayerActions.DELETE_FROM_QUEUE,
			payload: {
				song: {
					name: song.title,
					writer: song.artist,
					img: song.picture,
					src: song.preview,
					id: +song.id,
				},
				options: { ...state.audioInitialState },
			},
		});
	};
	const addToQueueHandler = () => {
		playerDispatch({
			type: PlayerActions.ADD_TO_QUEUE,
			payload: {
				song: {
					name: song.title,
					writer: song.artist,
					img: song.picture,
					src: song.preview,
					id: +song.id,
				},
				options: { ...state.audioInitialState },
			},
		});
	};
	const playHandler = () => {
		playerDispatch({
			type: PlayerActions.PLAY,
			payload: {
				song: {
					name: song.title,
					writer: song.artist,
					img: song.picture,
					src: song.preview,
					id: +song.id,
				},
				options: {
					curPlayId: +song.id,
					isPlaying: !state.audioInitialState.isPlaying,
				},
			},
		});
	};

	const favoriteHandler = async () => {
		const likePromise = likeSong(song.id, !isFavorite);
		const toastId = 'like';

		await statusNotifier<AxiosResponse>(likePromise, {
			pendingText: 'Trwa dodawanie...',
			successText: isFavorite
				? 'Usunięto utwór z ulubionych'
				: 'Dodano utwór do ulubionych',
			toastId,
		})
			.then((response: AxiosResponse) => {
				songsDispatch({
					type: SongsActions.LIKE_SONG,
					payload: response.data,
				});
				setIsFavorite(response.data.isFavorite);
			})
			.catch((err: AxiosError) => {
				console.log(err);
			});
	};
	const addHandler = async () => {
		const addPromise = addSongMutation(song);
		const toastId = 'add';

		await statusNotifier<AxiosResponse>(addPromise, {
			pendingText: 'Trwa dodawanie...',
			successText: 'Dodano utwór do biblioteki',
			toastId,
		})
			.then((response: AxiosResponse) => {
				songsDispatch({ type: SongsActions.ADD_SONG, payload: response.data });
			})
			.catch((err: AxiosError) => {
				console.log(err);
			});
	};
	const deleteHandler = async () => {
		const deletePromise = deleteSongFromLibrary(song.id);
		const toastId = 'delete';

		await statusNotifier<AxiosResponse>(deletePromise, {
			pendingText: 'Trwa usuwanie...',
			successText: 'Usunięto utwór z biblioteki',
			toastId,
		})
			.then((response: AxiosResponse) => {
				songsDispatch({
					type: SongsActions.REMOVE_SONG,
					payload: song.id,
				});
			})
			.catch((err: AxiosError) => {
				console.log(err);
			});
	};

	const filteredControls: ICardControls = filterControls(type);
	const cardFunctions: ICardFunctions = {
		add: addHandler,
		remove: deleteHandler,
		like: favoriteHandler,
		play: playHandler,
		addToQueue: addToQueueHandler,
		deleteFromQueue: deleteFromQueueHandler,
	};

	return (
		<Card
			sx={{
				display: 'flex',
				mr: 3,
				mt: 2,
				backgroundColor: '#f3f2ed',
				width: '18%',

				cursor: 'pointer',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100% ',
				}}
			>
				<CardHeader title={song.title} artist={song.artist} />
				<CardControl
					controls={filteredControls}
					controlFunctions={cardFunctions}
					song={song}
					status={{
						isFavorite,
						isInQueue: state.playlist.filter((item) => +item.id === +song.id)
							.length
							? true
							: false,
					}}
				/>
			</Box>
			<CardImage picture={song.picture} />
		</Card>
	);
};

export default CustomCard;
