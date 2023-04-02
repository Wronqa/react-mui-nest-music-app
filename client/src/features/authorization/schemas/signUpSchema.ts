import { object, string, number, date, InferType, ref } from 'yup';
import { authMessages } from '../../../messages/localizedMessages';

export let signUpSchema = object({
	username: string()
		.min(4, authMessages.username_invalid)
		.required(authMessages.required),
	email: string()
		.email(authMessages.email_invalid)
		.required(authMessages.required),
	password: string()
		.required(authMessages.required)
		.matches(
			/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/,
			authMessages.password_strong
		),
	passwordConfirmation: string().oneOf(
		[ref('password')],
		authMessages.password_invalid_confirmation
	),
});
