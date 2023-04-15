import React, { ReactNode, useMemo, useReducer } from 'react';
import AuthContext from '../contexts/AuthContext';
import { authReducer } from '../reducers/auth.reducer';
import { AUTH_INITIAL_VALUE } from '../initialStates/auth.initialState';

interface IAuthContextProviderProps {
	children: ReactNode;
}

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
	const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_VALUE);

	const value = useMemo(() => ({ state, dispatch }), [state]);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
