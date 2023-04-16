import {
	type ISongsAction,
	type ISongsState,
} from '../../shared/interfaces/song.interface';
import { songsActions } from '../actions/songs.actions';

export const songsReducer = (state: ISongsState, action: ISongsAction) => {
	const handler = songsActions[action.type];

	return handler(state, action);
};
