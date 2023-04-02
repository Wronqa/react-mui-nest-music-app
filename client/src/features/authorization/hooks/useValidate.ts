import { useEffect, useState } from 'react';
import { LoginDataInterface } from '../../../self_types/types';
import * as Yup from 'yup';

export const useValidate = (
	data: LoginDataInterface,
	schema: Yup.ObjectSchema<LoginDataInterface>
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
