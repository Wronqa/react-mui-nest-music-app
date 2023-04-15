import { Dispatch } from 'react';

export interface LoginDataInterface {
	email: string;
	password: string;
}
export interface RegisterDataInterface {
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}
export interface ForgotPasswordInterface {
	email: string;
}
export interface UserInterface {
	username: string;
	email: string;
}
export interface AuthStateInterface {
	user: UserInterface | null;
}
export interface AuthContextInterface {
	state: AuthStateInterface;
	dispatch: Dispatch<ShoppingCartAction>;
}
export type ShoppingCartAction = {
	type: ACTIONS;
	payload: UserInterface;
};
export enum ACTIONS {
	increaseCartQuantity = 'increaseCartQuantity',
	decreaseCartQuantity = 'decreaseCartQuantity',
	removeFromCart = 'removeFromCart',
}
