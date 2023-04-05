import { createContext } from 'react';
import {
	AuthContextInterface,
	AuthStateInterface,
} from '../shared/interfaces/auth.interface';

const INITIAL_VALUE: AuthStateInterface = {
	user: null,
};

export const AuthContext = createContext<AuthContextInterface>({
	state: INITIAL_VALUE,
	dispatch: () => null,
});
