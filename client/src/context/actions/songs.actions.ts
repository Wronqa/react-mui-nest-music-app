import {
	type ISong,
	type ISongsAction,
	type ISongsState,
} from '../../shared/interfaces/song.interface';

export const songsActions = {
	loadSongs: (state: ISongsState, action: ISongsAction): ISongsState => {
		return { songs: action.payload as ISong[] };
	},
	addSong: (state: ISongsState, action: ISongsAction): ISongsState => {
		return { songs: [...state.songs, action.payload] as ISong[] };
	},
	likeSong: (state: ISongsState, action: ISongsAction): ISongsState => {
		const tempState = state.songs;
		tempState.forEach((song) => {
			if (song.id === (action.payload as ISong).id)
				song.isFavorite = (action.payload as ISong).isFavorite;
		});
		return {
			songs: tempState,
		};
	},
	removeSong: (state: ISongsState, action: ISongsAction): ISongsState => {
		return {
			songs: state.songs.filter((song) => song.id !== action.payload),
		};
	},
};
