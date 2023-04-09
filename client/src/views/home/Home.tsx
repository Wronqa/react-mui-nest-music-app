import React, { useEffect, useState } from 'react';
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
import { getUserSongsService } from '../../services/userService';

const Home = () => {
	const [songs, setSongs] = useState<SongInterface[]>([]);

	const { mutateAsync: searchMutation } = useMutation(searchSongService);
	const { mutateAsync: userSongsMutation } = useMutation(getUserSongsService);

	const searchSongs = async (query: string) => {
		const searchPromise = searchMutation(query);
		const toastId = 'search';

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

	useEffect(() => {
		let isMounted = true;
		const userSongsPromise = userSongsMutation();
		const toastId = 'userSongs';

		(async () => {
			await statusNotifier<AxiosResponse>(userSongsPromise, {
				pendingText: 'Trwa pobieranie...',
				successText: 'Pobieranie zakończone',
				toastId,
			})
				.then((response: AxiosResponse) => {
					isMounted && setSongs(response.data);
				})
				.catch((err: AxiosError) => {
					console.log(err);
				});
		})();

		return () => {
			isMounted = false;
		};
	}, []);

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
