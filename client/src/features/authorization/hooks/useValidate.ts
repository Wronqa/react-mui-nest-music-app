import { useEffect, useState } from 'react';
import {
	type ForgotPasswordInterface,
	type LoginDataInterface,
	type RegisterDataInterface,
} from '../../../shared/types';
import type * as Yup from 'yup';

export const useValidate = (
	data: LoginDataInterface | RegisterDataInterface | ForgotPasswordInterface,
	schema: Yup.ObjectSchema<typeof data>
) => {
	const [errors, setErrors] = useState<string[]>([]);
	useEffect(() => {
		(async () => {
			try {
				await schema.validate(data);
				setErrors([]);
			} catch (err: any) {
				setErrors(err.errors);
			}
		})();
	}, [data, schema]);

	return errors;
};
