import React, { useState } from 'react';
import HomeToolbar from '../../features/navigation/HomeToolbar';
import SongsContainer from '../../features/songs/components/SongsContainer';
import Navbar from '../../components/common/Navbar';
import Player from '../../features/songs/components/Player';
import { searchSongService } from '../../services/songService';
import { useMutation } from 'react-query';
import { SongInterface } from '../../shared/interfaces/song.interface';
import { statusNotifier } from '../../tools/statusNotifier';
import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import { ToastContainer } from 'react-toastify';
import Toast from '../../components/toast/Toast';

const Home = () => {
	const toastId = 'home';
	const [songs, setSongs] = useState<SongInterface[]>([]);

	const { mutateAsync: searchMutation } = useMutation(searchSongService);

	const searchSongs = async (query: string) => {
		const searchPromise = searchMutation(query);
		///mutation.mutate(query);

		await statusNotifier<AxiosResponse>(searchPromise, {
			pendingText: 'Trwa wyszukiwanie...',
			successText: 'Wyszukiwanie zakończone',
			toastId,
		})
			.then((response: AxiosResponse) => {
				setSongs([response.data]);
			})
			.catch((err: AxiosError) => {
				console.log(err);
			});
	};

	return (
		<div>
			<Navbar>
				<HomeToolbar onSearch={searchSongs} />
			</Navbar>
			<SongsContainer title="Twoja biblioteka" songs={songs} />
			<Toast className={'toast'} />
			<Player />
		</div>
	);
};

export default Home;
