import { createContext } from 'react';
import { AuthContextInterface } from '../self_types/types';

export const INITIAL_VALUE: AuthContextInterface = {
	user: null,
};

export const AuthContext = createContext(INITIAL_VALUE);
