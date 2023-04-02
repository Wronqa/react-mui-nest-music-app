import React, { useState } from 'react';
import AudioPlayer, { InterfacePlacement } from 'react-modern-audio-player';

const Player = () => {
	const [autoplay, setAutoplay] = useState<boolean>(false);
	const playList = [
		{
			name: 'Disney',
			writer: 'Kizo',
			img: 'https://i.scdn.co/image/ab6761610000e5eb40fbc489f8cd8d0867590435',
			src: 'https://cdns-preview-e.dzcdn.net/stream/c-e674ea4ca1b24cbc6b65dc65934c1c21-4.mp3',
			id: 1,
		},
		{
			name: 'Eldorado',
			writer: 'Sanah',
			img: 'https://img.wprost.pl/img/sanah/4a/f7/fe7ed072a4126b5792e81d475b4a.jpeg',
			src: 'https://cdns-preview-e.dzcdn.net/stream/c-e674ea4ca1b24cbc6b65dc65934c1c21-4.mp3',
			id: 2,
		},
	];
	return (
		<div>
			<AudioPlayer
				playList={playList}
				audioInitialState={{
					isPlaying: autoplay,
					muted: false,
					volume: 0.2,
					curPlayId: 1,
				}}
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
