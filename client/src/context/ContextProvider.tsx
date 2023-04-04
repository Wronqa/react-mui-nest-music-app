import React, { ReactNode,useReducer } from 'react';
import { AuthContext, INITIAL_VALUE } from './authContext';

interface ContextProviderInterface {
	children: ReactNode;
}
const ContextProvider = ({ children }: ContextProviderInterface) => {
  const [state,dispatch] = useReducer(,INITIAL_VALUE)
	return (
		<AuthContext.Provider value={{ user: null }}>
			{children}
		</AuthContext.Provider>
	);
};

export default ContextProvider;
