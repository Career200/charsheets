import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Routes from './pages/Routes';
import { AuthProvider } from './utils/hooks/useAuth';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AuthProvider>
			<Routes />
		</AuthProvider>
	</React.StrictMode>
);
