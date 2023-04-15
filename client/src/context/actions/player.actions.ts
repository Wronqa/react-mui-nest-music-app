import {
	IPlayerAction,
	PlayerInterface,
} from '../../shared/interfaces/player.interface';

export const playerActions = {
	play: (state: PlayerInterface, action: IPlayerAction): PlayerInterface => {
		return {
			audioInitialState: {
				...state.audioInitialState,
				...action.payload.options,
			},
			playlist: [action.payload.song],
		};
	},
};
