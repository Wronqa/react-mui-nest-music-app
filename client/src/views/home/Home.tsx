import React, { useContext, useEffect, useState } from 'react';
import HomeToolbar from '../../features/navigation/HomeToolbar';
import SongsContainer from '../../features/songs/components/SongsContainer';
import Navbar from '../../components/common/Navbar';
import Player from '../../features/songs/components/Player';
import { searchSongService } from '../../services/songService';
import { useMutation } from 'react-query';
import {
	SONGS_ACTIONS,
	SongInterface,
	SongsInterface,
	TYPES,
} from '../../shared/interfaces/song.interface';
import { statusNotifier } from '../../tools/statusNotifier';
import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import { ToastContainer } from 'react-toastify';
import Toast from '../../components/toast/Toast';
import { getUserSongsService } from '../../services/userService';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const Home = () => {
	const { songsState, songsDispatch } = useContext(GlobalContext);
	const [songsData, setSongsData] = useState<SongsInterface>({
		songs: songsState.songs,
		type: TYPES.home,
	});

	const { mutateAsync: searchMutation } = useMutation(searchSongService);
	const { mutateAsync: userSongsMutation } = useMutation(getUserSongsService);
	const location = useLocation();

	const searchSongs = async (query: string) => {
		const searchPromise = searchMutation(query);
		const toastId = 'search';

		await statusNotifier<AxiosResponse>(searchPromise, {
			pendingText: 'Trwa wyszukiwanie...',
			successText: 'Wyszukiwanie zakończone',
			toastId,
		})
			.then((response: AxiosResponse) => {
				setSongsData({ songs: [response.data], type: TYPES.search });
			})
			.catch((err: AxiosError) => {
				console.log(err);
			});
	};

	useEffect(() => {
		console.log('KURWY JEBANE');
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
					if (isMounted) {
						songsDispatch({
							type: SONGS_ACTIONS.loadSongs,
							payload: response.data,
						});
					}
				})
				.catch((err: AxiosError) => {
					console.log(err);
				});
		})();

		return () => {
			isMounted = false;
		};
	}, []);

	useEffect(() => {
		let isMounted = true;

		if (location.pathname === '/favorities')
			isMounted &&
				setSongsData({
					songs: songsState.songs.filter((song) => song.isFavorite),
					type: TYPES.home,
				});
		else
			isMounted && setSongsData({ songs: songsState.songs, type: TYPES.home });

		return () => {
			isMounted = false;
		};
	}, [songsState, location.pathname]);

	return (
		<div>
			<Navbar>
				<HomeToolbar onSearch={searchSongs} />
			</Navbar>
			<SongsContainer title="Twoja biblioteka" songsData={songsData} />
			<Toast className={'toast'} />
			<Player />
		</div>
	);
};

export default Home;
