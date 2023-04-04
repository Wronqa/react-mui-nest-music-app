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
export interface AuthContextInterface {
	user: UserInterface | null;
}
