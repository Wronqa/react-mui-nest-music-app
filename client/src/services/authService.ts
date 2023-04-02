import { RegisterDataInterface } from '../self_types/types';
import { Api } from '../tools/Api';

export const signUpService = async (data: RegisterDataInterface) => {
	return Api.signup(data);
};
