import { object, string } from 'yup';
import { authMessages } from '../../../messages/localizedMessages';

export const forgotPasswordSchema = object({
	email: string()
		.email(authMessages.email_invalid)
		.required(authMessages.required),
});
