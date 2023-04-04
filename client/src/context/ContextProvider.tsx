import React, { ReactNode, useReducer } from 'react';
import { AuthContext } from './authContext';
import { authReducer } from './authReducer';

interface ContextProviderInterface {
	children: ReactNode;
}
const ContextProvider = ({ children }: ContextProviderInterface) => {
	const [state, dispatch] = useReducer(authReducer, { user: null });
	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default ContextProvider;
