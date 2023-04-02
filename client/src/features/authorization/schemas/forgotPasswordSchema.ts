import { object, string, number, date, InferType } from 'yup';
import { authMessages } from '../../../messages/localizedMessages';

export let forgotPasswordSchema = object({
	email: string()
		.email(authMessages.email_invalid)
		.required(authMessages.required),
});
