import React from 'react';
import HomeToolbar from '../../features/navigation/HomeToolbar';
import Navbar from '../../components/common/Navbar';
import Player from '../../features/songs/components/Player';

const Favorites = (): JSX.Element => {
	return (
		<div>
			<Navbar>
				<HomeToolbar />
			</Navbar>
			<Player />
		</div>
	);
};

export default Favorites;
