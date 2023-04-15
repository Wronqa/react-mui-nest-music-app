import { createContext } from 'react';
import { IAuthContext } from '../../shared/interfaces/auth.interface';
import { AUTH_INITIAL_VALUE } from '../initialStates/auth.initialState';

const AuthContext = createContext<IAuthContext>({
	state: AUTH_INITIAL_VALUE,
	dispatch: () => null,
});

export default AuthContext;
