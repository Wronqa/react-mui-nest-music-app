import { createContext } from 'react';
import { AuthContextInterface, AuthStateInterface } from '../self_types/types';

const INITIAL_VALUE: AuthStateInterface = {
	user: null,
};

export const AuthContext = createContext<AuthContextInterface>({
	state: INITIAL_VALUE,
	dispatch: () => null,
});
