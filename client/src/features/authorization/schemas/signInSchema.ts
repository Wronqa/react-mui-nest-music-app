import { object, string, number, date, InferType } from 'yup';
import { authMessages } from '../../../messages/localizedMessages';

export let signInSchema = object({
	email: string()
		.email(authMessages.email_invalid)
		.required(authMessages.required),
	password: string()
		.required(authMessages.required)
		.matches(
			/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/,
			authMessages.password_strong
		),
});
