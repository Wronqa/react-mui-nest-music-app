import React, { useState, useContext } from 'react';
import HomeToolbar from '../../features/navigation/HomeToolbar';
import CustomCard from '../../components/card/CustomCard';
import SongsContainer from '../../features/songs/components/SongsContainer';
import Navbar from '../../components/common/Navbar';
import Player from '../../features/songs/components/Player';
import { searchSongService } from '../../services/songService';
import { useMutation } from 'react-query';
import { SongInterface } from '../../shared/interfaces/song.interface';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

////Zrób duze okienko do wyszukiwania
const Home = () => {
	const [songs, setSongs] = useState<SongInterface[]>([]);
	const mutation = useMutation({
		mutationFn: searchSongService,
		onSuccess(response, variables, context) {
			setSongs([response.data]);
		},
	});

	const searchSongs = (query: string) => {
		mutation.mutate(query);
	};

	return (
		<div>
			<Navbar>
				<HomeToolbar onSearch={searchSongs} />
			</Navbar>
			<SongsContainer title="Twoja biblioteka" songs={songs} />
			<Player />
		</div>
	);
};

export default Home;
