import { object, string, number, date, InferType, ref } from 'yup';

export let signUpSchema = object({
	username: string()
		.min(4, 'Nazwa użytkownika musi mieć minimum 4 znaki')
		.required('Podaj nazwe uzytkownika'),
	email: string().email().required('Podaj adres email'),
	password: string()
		.required('Podaj hasło')
		.matches(
			/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/,
			'Hasło musi zawierać minimum 8 znaków, przynajmniej jedną cyfre, znak specjalny oraz duża literę'
		),
	passwordConfirmation: string().oneOf(
		[ref('password')],
		'Hasła nie są takie same'
	),
});
