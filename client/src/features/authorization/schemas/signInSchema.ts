import { object, string, number, date, InferType } from 'yup';

export let signInSchema = object({
	email: string().email().required(),
	password: string()
		.required()
		.matches(
			/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/,
			'Hasło musi zawierać minimum 8 znaków, przynajmniej jedną cyfre, znak specjalny oraz duża literę'
		),
});
