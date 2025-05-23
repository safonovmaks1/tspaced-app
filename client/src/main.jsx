import '@a1rth/css-normalize/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

if (!rootElement) {
	throw new Error('Root element not found');
}

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
