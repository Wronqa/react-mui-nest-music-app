import { Dispatch } from 'react';
import { SongInterface } from './song.interface';

export interface UserInterface {
	username: string;
	email: string;
}
export interface AuthStateInterface {
	user: UserInterface | null;
}

export interface AuthActionInterface {
	type: AUTH_ACTIONS;
	payload: any;
}
export enum AUTH_ACTIONS {
	loadUser = 'loadUser',
	removeUser = 'removeUser',
}
