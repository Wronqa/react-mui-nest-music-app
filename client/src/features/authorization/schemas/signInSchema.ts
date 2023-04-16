import { object, string } from 'yup';
import { authMessages } from '../../../messages/localizedMessages';

export const signInSchema = object({
	email: string()
		.email(authMessages.email_invalid)
		.required(authMessages.required),
	password: string()
		.required(authMessages.required)
		.matches(
			// eslint-disable-next-line no-useless-escape
			/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/,
			authMessages.password_strong
		),
});
