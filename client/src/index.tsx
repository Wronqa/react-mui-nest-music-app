import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthContextProvider from './context/GlobalContextProvider';
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from 'react-query';
import PlayerContextProvider from './context/providers/PlayerContextProvider';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
).render(
	<React.StrictMode>
		<AuthContextProvider>
			<PlayerContextProvider>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</PlayerContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
