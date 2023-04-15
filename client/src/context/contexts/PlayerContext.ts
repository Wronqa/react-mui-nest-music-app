import { createContext } from 'react';
import { IPlayerContext } from '../../shared/interfaces/player.interface';
import { PLAYER_INITIAL_STATE } from '../initialStates/player.initialState';

const PlayerContext = createContext<IPlayerContext>({
	state: PLAYER_INITIAL_STATE,
	dispatch: () => null,
});

export default PlayerContext;
