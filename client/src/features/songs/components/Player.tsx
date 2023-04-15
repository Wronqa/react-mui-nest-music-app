import React, { useContext, useState } from 'react';
import AudioPlayer, { InterfacePlacement } from 'react-modern-audio-player';
import PlayerContext from '../../../context/contexts/PlayerContext';

const Player = () => {
	const [autoplay, setAutoplay] = useState<boolean>(false);

	const { state } = useContext(PlayerContext);

	console.log(state);
	const playList = [
		{
			name: 'Disney',
			writer: 'Kizo',
			img: 'https://i.scdn.co/image/ab6761610000e5eb40fbc489f8cd8d0867590435',
			src: 'https://cdns-preview-e.dzcdn.net/stream/c-e674ea4ca1b24cbc6b65dc65934c1c21-4.mp3',
			id: 1,
		},
	];
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
