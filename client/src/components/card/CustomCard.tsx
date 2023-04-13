import React, { useEffect } from 'react';

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
	SongInterface,
	TYPES,
} from '../../shared/interfaces/song.interface';
import { filterControls } from '../../features/songs/tools/cardControlFilter';
import { useMutation } from 'react-query';
import {
	addSongToLibrary,
	deleteSongFromLibrary,
} from '../../services/songService';
import { AxiosError, AxiosResponse } from 'axios';
import { statusNotifier } from '../../tools/statusNotifier';
import { useNavigate } from 'react-router-dom';

interface CustomCardProps {
	song: SongInterface;
	type: TYPES;
}
const CustomCard = ({ song, type }: CustomCardProps) => {
	const { mutateAsync: addSongMutation } = useMutation(addSongToLibrary);
	const navigate = useNavigate();

	const favoriteHandler = () => {
		console.log('test');
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
				console.log('Dodano');
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
				navigate('/');
			})
			.catch((err: AxiosError) => {
				console.log(err);
			});
	};
	const playHandler = () => {
		console.log('play');
	};

	const filteredControls: CardControls = filterControls(type);
	const cardFunctions: CardFunctions = {
		add: addHandler,
		remove: deleteHandler,
		favorite: favoriteHandler,
		play: playHandler,
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
				/>
			</Box>
			<CardImage picture={song.picture} />
		</Card>
	);
};

export default CustomCard;
