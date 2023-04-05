import { Dispatch } from 'react';

export interface UserInterface {
	username: string;
	email: string;
}
export interface AuthStateInterface {
	user: UserInterface | null;
}
export interface AuthContextInterface {
	state: AuthStateInterface;
	dispatch: Dispatch<ActionInterface>;
}
export interface ActionInterface {
	type: ACTIONS;
	payload: any;
}
export enum ACTIONS {
	loadUser = 'loadUser',
	removeUser = 'removeUser',
}
