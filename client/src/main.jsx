import '@a1rth/css-normalize/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
