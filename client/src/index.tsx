import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import PlayerContextProvider from './context/providers/PlayerContextProvider';
import AuthContextProvider from './context/providers/AuthContextProvider';
import SongsContextProvider from './context/providers/SongsContextProvider';

const queryClient = new QueryClient();

console.log('Test');

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
).render(
	<React.StrictMode>
		<AuthContextProvider>
			<SongsContextProvider>
				<PlayerContextProvider>
					<QueryClientProvider client={queryClient}>
						<App />
					</QueryClientProvider>
				</PlayerContextProvider>
			</SongsContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
