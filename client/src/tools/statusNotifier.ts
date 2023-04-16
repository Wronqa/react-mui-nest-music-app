import { type AxiosError } from 'axios';

import { type ToastContentProps, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface StatusHandlerInterface {
	pendingText: string;
	successText: string;
	toastId: string;
}
export const statusNotifier = async <T>(
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
					if (data?.code === 'ERR_NETWORK') return data.message;
					const data3 = data?.response?.data;
					return (data3 as { message: string }).message;
				},
			},
		},
		{ toastId }
	);
};
