import React from 'react';
import HomeToolbar from '../../features/navigation/HomeToolbar';
import CustomCard from '../../components/card/CustomCard';
import SongsContainer from '../../features/songs/components/SongsContainer';
import Navbar from '../../components/common/Navbar';
import Player from '../../features/songs/components/Player';

const Home = () => {
	return (
		<div>
			<Navbar>
				<HomeToolbar />
			</Navbar>
			<SongsContainer title="Twoja biblioteka" />
			<Player />
		</div>
	);
};

export default Home;
