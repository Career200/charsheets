import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Routes from './pages/Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>
);
