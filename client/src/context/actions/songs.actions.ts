import {
	SongsActionInterface,
	SongsStateInterface,
} from '../../shared/interfaces/song.interface';

export const songsActions = {
	loadSongs: (state: SongsStateInterface, action: SongsActionInterface) => {
		return { songs: action.payload };
	},
	addSong: (state: SongsStateInterface, action: SongsActionInterface) => {
		return { songs: [...state.songs, action.payload] };
	},
	likeSong: (state: SongsStateInterface, action: SongsActionInterface) => {
		const tempState = state.songs;
		tempState.forEach((song) => {
			if (song.id === action.payload.id)
				song.isFavorite = action.payload.isFavorite;
		});
		console.log(tempState);
		return {
			songs: tempState,
		};
	},
	removeSong: (state: SongsStateInterface, action: SongsActionInterface) => {
		return {
			songs: state.songs.filter((song) => song.id !== action.payload),
		};
	},
};
