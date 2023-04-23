import {
	type IPlayerState,
	PlayerActions,
	type IPlayerActionPayload,
} from '../../../shared/interfaces/player.interface';
import { playerActions } from '../player.actions';

const initialState: IPlayerState = {
	playlist: [
		{ name: 'Song1', writer: 'Writer1', img: 'url', src: 'src', id: 1 },
	],
	audioInitialState: { isPlaying: false, muted: true, volume: 2, curPlayId: 2 },
};
const payload: IPlayerActionPayload = {
	song: { name: 'Songs2', writer: 'Writer2', img: 'url', src: 'src', id: 2 },
	options: {
		curPlayId: 2,
		isPlaying: true,
	},
};
const songsToDelete = {
	name: 'Song1',
	writer: 'Writer1',
	img: 'url',
	src: 'src',
	id: 1,
};

describe('(Function) play', () => {
	it('Should set passed song to now play ', () => {
		const action = { type: PlayerActions.PLAY, payload };
		const newState = playerActions.play(initialState, action);

		expect(newState).toEqual({
			playlist: [payload.song],
			audioInitialState: {
				...initialState.audioInitialState,
				isPlaying: true,
				curPlayId: 2,
			},
		});
	});
});
describe('(Function) addToQueue', () => {
	it('Should add passed song to queue ', () => {
		const action = { type: PlayerActions.ADD_TO_QUEUE, payload };
		const newState = playerActions.addToQueue(initialState, action);

		expect(newState.playlist).toEqual([...initialState.playlist, payload.song]);
	});
});
describe('(Function) deleteFromQueue', () => {
	it('Should return prev state when playlist length is < 0 ', () => {
		const action = {
			type: PlayerActions.DELETE_FROM_QUEUE,
			payload: { ...payload, song: songsToDelete },
		};
		const newState = playerActions.deleteFromQueue(initialState, action);

		expect(newState).toEqual(initialState);
	});
	it('Should delete song from playlist when playlist length is > 0 and song that we want to delete is no playing', () => {
		initialState.playlist = [...initialState.playlist, payload.song];

		const action = {
			type: PlayerActions.DELETE_FROM_QUEUE,
			payload: { ...payload, song: songsToDelete },
		};
		const newState = playerActions.deleteFromQueue(initialState, action);

		expect(newState.playlist).toEqual([payload.song]);
	});
	it('Should empty playlist when playlist length is > 0 and song that we want to delete is playing', () => {
		initialState.playlist = [...initialState.playlist, payload.song];
		initialState.audioInitialState.curPlayId = 1;

		const action = {
			type: PlayerActions.DELETE_FROM_QUEUE,
			payload: { ...payload, song: songsToDelete },
		};
		const newState = playerActions.deleteFromQueue(initialState, action);

		expect(newState.playlist).toEqual([]);
	});
});
