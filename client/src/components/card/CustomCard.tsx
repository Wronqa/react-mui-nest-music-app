import React, { useEffect, useState, useContext } from 'react';

import {
	Box,
	CardContent,
	Typography,
	IconButton,
	CardMedia,
	Card,
} from '@mui/material';
import { link } from 'fs';
import CardHeader from './CardHeader';
import CardControl from './CardControl';
import CardImage from './CardImage';
import {
	CardControls,
	CardFunctions,
	SONGS_ACTIONS,
	SongInterface,
	TYPES,
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
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import PlayerContext from '../../context/contexts/PlayerContext';
import { PlayerActions } from '../../shared/interfaces/player.interface';

interface CustomCardProps {
	song: SongInterface;
	type: TYPES;
}
const CustomCard = ({ song, type }: CustomCardProps) => {
	const [isFavorite, setIsFavorite] = useState(song.isFavorite);
	const { mutateAsync: addSongMutation } = useMutation(addSongToLibrary);

	const navigate = useNavigate();

	const { songsDispatch } = useContext(GlobalContext);
	const { dispatch: playerDispatch, state } = useContext(PlayerContext);

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
					type: SONGS_ACTIONS.likeSong,
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
				songsDispatch({ type: SONGS_ACTIONS.addSong, payload: response.data });
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
					type: SONGS_ACTIONS.removeSong,
					payload: song.id,
				});
			})
			.catch((err: AxiosError) => {
				console.log(err);
			});
	};

	const filteredControls: CardControls = filterControls(type);
	const cardFunctions: CardFunctions = {
		add: addHandler,
		remove: deleteHandler,
		like: favoriteHandler,
		play: playHandler,
		addToQueue: addToQueueHandler,
	};

	return (
		<Card
			sx={{
				display: 'flex',
				mr: 3,
				mt: 2,
				backgroundColor: '#f3f2ed',
				width: '18%',
				height: '2%',
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
					isFavorite={isFavorite}
					isPlaying={
						+state.audioInitialState.curPlayId === +song.id &&
						state.audioInitialState.isPlaying
					}
				/>
			</Box>
			<CardImage picture={song.picture} />
		</Card>
	);
};

export default CustomCard;
