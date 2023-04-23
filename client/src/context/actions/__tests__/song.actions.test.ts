import { SongsActions } from '../../../shared/interfaces/song.interface';
import { songsActions } from '../songs.actions';

const initialState = {
	songs: [
		{
			id: '0',
			title: 'song1',
			duration: 30,
			preview: 'url',
			artist: 'artist1',
			picture: 'picture',
			isFavorite: true,
		},
		{
			id: '1',
			title: 'song2',
			duration: 30,
			preview: 'url',
			artist: 'artist2',
			picture: 'picture',
			isFavorite: false,
		},
	],
};

describe('(Function) loadSongs', () => {
	it('Should put specific song to context', () => {
		const action = {
			type: SongsActions.LOAD_SONGS,
			payload: {
				id: '2',
				title: 'song3',
				duration: 30,
				preview: 'url',
				artist: 'artist3',
				picture: 'picture',
				isFavorite: false,
			},
		};
		const newState = songsActions.loadSongs(initialState, action);

		expect(newState.songs).toEqual(action.payload);
	});
});

describe('(Function) addSong', () => {
	it('Should put specific song to array', () => {
		const action = {
			type: SongsActions.ADD_SONG,
			payload: {
				id: '1',
				title: 'song3',
				duration: 30,
				preview: 'url',
				artist: 'artist3',
				picture: 'picture',
				isFavorite: false,
			},
		};
		const newState = songsActions.addSong(initialState, action);

		expect(newState.songs).toStrictEqual([
			...initialState.songs,
			action.payload,
		]);
	});
});

describe('(Function) likeSong', () => {
	it('Should set isFavorite property to true or false', () => {
		const songToUpdate = initialState.songs[1];
		const action = {
			type: SongsActions.LIKE_SONG,
			payload: {
				...songToUpdate,
				isFavorite: true,
			},
		};
		const newState = songsActions.likeSong(initialState, action);

		expect(newState.songs[1]).toEqual(action.payload);
	});
	it('Should keep original song properties', () => {
		const songToUpdate = initialState.songs[1];
		const action = {
			type: SongsActions.LIKE_SONG,
			payload: {
				...songToUpdate,
				isFavorite: true,
			},
		};
		const newState = songsActions.likeSong(initialState, action);

		expect(newState.songs).toContain(songToUpdate);
	});
});

describe('(Function) removeSong', () => {
	it('Should remove specific song from array', () => {
		const songToDelete = initialState.songs[0];
		const action = {
			type: SongsActions.REMOVE_SONG,
			payload: songToDelete.id,
		};
		const newState = songsActions.removeSong(initialState, action);

		expect(newState.songs).not.toContain([songToDelete]);
	});
	it('Should keep original songs', () => {
		const songToDelete = initialState.songs[0];
		const action = {
			type: SongsActions.REMOVE_SONG,
			payload: songToDelete.id,
		};
		const newState = songsActions.removeSong(initialState, action);

		expect(newState.songs).toEqual(
			initialState.songs.filter((song) => song.id !== songToDelete.id)
		);
	});
});
