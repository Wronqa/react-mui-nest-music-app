import { object, string, ref } from 'yup';
import { authMessages } from '../../../messages/localizedMessages';

export const signUpSchema = object({
	username: string()
		.min(4, authMessages.username_invalid)
		.required(authMessages.required),
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
	passwordConfirmation: string().oneOf(
		[ref('password')],
		authMessages.password_invalid_confirmation
	),
});
