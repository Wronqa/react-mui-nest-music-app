import React, { type ReactNode, useMemo, useReducer } from 'react';
import PlayerContext from '../contexts/PlayerContext';
import { PLAYER_INITIAL_STATE } from '../initialStates/player.initialState';
import { playerReducer } from '../reducers/player.reducer';

interface IPlayerContextProviderProp {
	children: ReactNode;
}
const PlayerContextProvider = ({ children }: IPlayerContextProviderProp) => {
	const [state, dispatch] = useReducer(playerReducer, PLAYER_INITIAL_STATE);

	const value = useMemo(() => ({ state, dispatch }), [state]);

	return (
		<PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
	);
};

export default PlayerContextProvider;
