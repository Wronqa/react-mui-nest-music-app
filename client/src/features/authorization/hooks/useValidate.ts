import { useEffect, useState } from 'react';
import {
	ForgotPasswordInterface,
	LoginDataInterface,
} from '../../../self_types/types';
import * as Yup from 'yup';
import { RegisterDataInterface } from '../../../self_types/types';

export const useValidate = (
	data: LoginDataInterface | RegisterDataInterface | ForgotPasswordInterface,
	schema: Yup.ObjectSchema<typeof data>
) => {
	const [errors, setErrors] = useState<string[]>([]);
	useEffect(() => {
		(async () => {
			try {
				const user = await schema.validate(data);
				setErrors([]);
			} catch (err: any) {
				setErrors(err.errors);
			}
		})();
	}, [data, schema]);

	return errors;
};
