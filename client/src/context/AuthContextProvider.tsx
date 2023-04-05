import React, { ReactNode, useMemo, useReducer } from 'react';
import { AuthContext } from './auth.context';
import { authReducer } from './auth.reducer';

interface AuthContextProviderInterface {
	children: ReactNode;
}
const AuthContextProvider = ({ children }: AuthContextProviderInterface) => {
	const [state, dispatch] = useReducer(authReducer, { user: null });
	const value = useMemo(() => ({ state, dispatch }), [state]);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
