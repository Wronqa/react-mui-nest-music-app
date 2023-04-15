import { PlayerInterface } from '../../shared/interfaces/player.interface';

export const PLAYER_INITIAL_STATE: PlayerInterface = {
	playlist: [
		{
			name: 'Disney',
			writer: 'Kizo',
			img: 'https://i.scdn.co/image/ab6761610000e5eb40fbc489f8cd8d0867590435',
			src: 'https://cdns-preview-e.dzcdn.net/stream/c-e674ea4ca1b24cbc6b65dc65934c1c21-4.mp3',
			id: 1,
		},
	],
	audioInitialState: {
		isPlaying: false,
		muted: false,
		volume: 0.2,
		curPlayId: 1,
	},
};
