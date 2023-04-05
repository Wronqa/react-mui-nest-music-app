import { LoginDataInterface, RegisterDataInterface } from '../shared/types';
import { Api } from '../tools/Api';

export const signUpService = async (data: RegisterDataInterface) => {
	return Api.signup(data);
};
export const signInService = async (data: LoginDataInterface) => {
	return Api.signin(data);
};
export const checkAuthenticationService = async () => {
	return Api.checkAuthentication();
};
