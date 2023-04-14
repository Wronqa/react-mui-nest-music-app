import {
	SongsActionInterface,
	SongsStateInterface,
} from '../../shared/interfaces/song.interface';
import { songsActions } from '../actions/songs.actions';

export const songsReducer = (
	state: SongsStateInterface,
	action: SongsActionInterface
) => {
	const handler = songsActions[action.type];

	return handler(state, action);
};
