import React from 'react';
import HomeToolbar from '../../features/navigation/HomeToolbar';
import Navbar from '../../components/common/Navbar';
import Player from '../../features/songs/components/Player';
import SongsContainer from '../../features/songs/components/SongsContainer';

const Favorites = () => {
	return (
		<div>
			<Navbar>
				<HomeToolbar />
			</Navbar>
			<SongsContainer title="Ulubione" songs={[]} />
			<Player />
		</div>
	);
};

export default Favorites;
