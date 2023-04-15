import { ToastContainer } from 'react-toastify';
import './style.css';

interface ToastProps {
	className?: 'toast';
}
const Toast = ({ className }: ToastProps) => {
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
			className={className}
		/>
	);
};

export default Toast;
