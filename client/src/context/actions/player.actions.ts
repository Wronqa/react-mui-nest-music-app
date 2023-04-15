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
	addToQueue: (state: PlayerInterface, action: IPlayerAction) => {
		return {
			audioInitialState: {
				...state.audioInitialState,
				...action.payload.options,
			},
			playlist: [...state.playlist, action.payload.song],
		};
	},
};
