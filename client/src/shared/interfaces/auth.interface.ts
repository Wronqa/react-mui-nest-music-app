import { Dispatch } from 'react';

export interface IUser {
	username: string;
	email: string;
}
export interface IAuthState {
	user: IUser | null;
}
export interface IAuthContext {
	state: IAuthState;
	dispatch: Dispatch<IAuthAction>;
}
export interface IAuthAction {
	type: AuthActions;
	payload: IUser | string | null;
}
export enum AuthActions {
	LOAD_USER = 'loadUser',
	REMOVE_USER = 'removeUser',
}
