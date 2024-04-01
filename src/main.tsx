import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store } from './store/store.ts';
import { GlobalStyle } from './styles/app.styles.ts';

const rootElement = document.getElementById('root');

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);

	root.render(
		<Router>
			<Provider store={store}>
				<GlobalStyle />
				<App />
			</Provider>
		</Router>
	);
}
