import React, { useContext, useEffect, useState } from 'react';
import HomeToolbar from '../../features/navigation/HomeToolbar';
import SongsContainer from '../../features/songs/components/SongsContainer';
import Navbar from '../../components/common/Navbar';
import Player from '../../features/songs/components/Player';
import { searchSongService } from '../../services/songService';
import { useMutation } from 'react-query';
import {
	SongsActions,
	ISong,
	ISongs,
	ISongsViewType,
} from '../../shared/interfaces/song.interface';
import { statusNotifier } from '../../tools/statusNotifier';
import { AxiosError, AxiosResponse } from 'axios';
import Toast from '../../components/toast/Toast';
import { getUserSongsService } from '../../services/userService';
import { useLocation } from 'react-router-dom';
import { SongsContext } from '../../context/contexts/SongsContext';

const Home = () => {
	const { state: songsState, dispatch: songsDispatch } =
		useContext(SongsContext);
	const [songsData, setSongsData] = useState<ISongs>({
		songs: songsState.songs,
		type: ISongsViewType.HOME,
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
				setSongsData({ songs: [response.data], type: ISongsViewType.SEARCH });
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
					if (isMounted) {
						songsDispatch({
							type: SongsActions.LOAD_SONGS,
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
					songs: songsState.songs.filter((song: ISong) => song.isFavorite),
					type: ISongsViewType.FAVORITE,
				});
		else
			isMounted &&
				setSongsData({ songs: songsState.songs, type: ISongsViewType.HOME });

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
