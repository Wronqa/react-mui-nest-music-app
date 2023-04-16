import React, { type ReactNode, useMemo, useReducer } from 'react';
import { songsReducer } from '../reducers/songs.reducer';
import { SONGS_INITIAL_VALUE } from '../initialStates/songs.initialState';
import { SongsContext } from '../contexts/SongsContext';

interface ISongsContextProviderProps {
	children: ReactNode;
}
const SongsContextProvider = ({ children }: ISongsContextProviderProps) => {
	const [state, dispatch] = useReducer(songsReducer, SONGS_INITIAL_VALUE);
	const value = useMemo(() => ({ state, dispatch }), [state]);

	return (
		<SongsContext.Provider value={value}>{children}</SongsContext.Provider>
	);
};

export default SongsContextProvider;
