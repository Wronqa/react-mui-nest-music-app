import { AxiosError } from 'axios';
import { Dispatch } from 'react';
import { ToastContainer, ToastContentProps, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ACTIONS, ActionInterface } from '../shared/interfaces/auth.interface';

interface StatusHandlerInterface {
	pendingText: string;
	successText: string;
	toastId: string;
}
export const statusHandler = <T>(
	promise: Promise<T>,
	{ pendingText, successText, toastId }: StatusHandlerInterface
) => {
	return toast.promise(
		promise,
		{
			pending: pendingText,
			success: successText,
			error: {
				render({ data }: ToastContentProps<AxiosError>) {
					const data3 = data?.response?.data;
					return (data3 as { message: string }).message;
				},
			},
		},
		{ toastId }
	);
};
