import React, { useContext } from 'react';
import AudioPlayer from 'react-modern-audio-player';
import PlayerContext from '../../../context/contexts/PlayerContext';

const Player = () => {
	const { state } = useContext(PlayerContext);

	return (
		<div>
			<AudioPlayer
				playList={state.playlist}
				audioInitialState={state.audioInitialState}
				placement={{
					player: 'bottom-left',
				}}
				activeUI={{
					all: true,
					progress: 'bar',
				}}
			/>
		</div>
	);
};

export default Player;
