import {
	IAuthAction,
	IAuthState,
	IUser,
} from '../../shared/interfaces/auth.interface';

export const authActions = {
	loadUser: (state: IAuthState, action: IAuthAction): IAuthState => {
		return { ...state, user: action.payload as IUser };
	},
	removeUser: (state: IAuthState, action: IAuthAction): IAuthState => {
		return { ...state, user: action.payload as IUser };
	},
};
