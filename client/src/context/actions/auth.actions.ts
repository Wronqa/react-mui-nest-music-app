import {
	AuthActionInterface,
	AuthStateInterface,
} from '../../shared/interfaces/auth.interface';

export const authActions = {
	loadUser: (state: AuthStateInterface, action: AuthActionInterface) => {
		return { ...state, user: action.payload };
	},
	removeUser: (state: AuthStateInterface, action: AuthActionInterface) => {
		return { ...state, user: action.payload };
	},
};
