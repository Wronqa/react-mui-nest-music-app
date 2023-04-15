import { createContext } from 'react';
import AudioPlayer from 'react-modern-audio-player';
import {
	PlayerContextInterface,
	PlayerInterface,
} from '../../shared/interfaces/player.interface';
import { PLAYER_INITIAL_STATE } from '../initialStates/player.initialState';

const PlayerContext = createContext<PlayerContextInterface>({
	state: PLAYER_INITIAL_STATE,
	dispatch: () => null,
});

export default PlayerContext;
