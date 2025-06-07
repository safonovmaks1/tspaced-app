import '@a1rth/css-normalize/index.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App.jsx';
import './index.scss';
import { store } from './store/store.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	// <StrictMode>
	<Provider store={store}>
		<App />
	</Provider>,
	// </StrictMode>,
);
