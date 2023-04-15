import {
	IPlayerAction,
	IPlayerState,
} from '../../shared/interfaces/player.interface';
import { playerActions } from '../actions/player.actions';

export const playerReducer = (state: IPlayerState, action: IPlayerAction) => {
	const handler = playerActions[action.type];

	return handler(state, action);
};
