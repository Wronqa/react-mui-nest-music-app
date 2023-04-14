import React, { ReactNode, useMemo, useReducer } from 'react';
import { GlobalContext } from './GlobalContext';
import { authReducer } from './reducers/auth.reducer';
import { songsReducer } from './reducers/songs.reducer';

interface ContextProviderInterface {
	children: ReactNode;
}
const GlobalProvider = ({ children }: ContextProviderInterface) => {
	const [authState, authDispatch] = useReducer(authReducer, { user: null });
	const [songsState, songsDispatch] = useReducer(songsReducer, { songs: [] });

	const authValue = useMemo(() => ({ authState, authDispatch }), [authState]);
	const songsValue = useMemo(
		() => ({ songsState, songsDispatch }),
		[songsState]
	);
	return (
		<GlobalContext.Provider value={{ ...authValue, ...songsValue }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
