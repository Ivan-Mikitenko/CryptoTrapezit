import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store } from './store/store.ts';
import { GlobalStyle } from './styles/app.styles.ts';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ChakraProvider } from '@chakra-ui/react';

const rootElement = document.getElementById('root');

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);

	root.render(
		<Router>
			<Provider store={store}>
				<ChakraProvider>
					<TonConnectUIProvider
						manifestUrl='https://ivan-mikitenko.github.io/CryptoTrapezit/tonconnect-manifest.json'
						actionsConfiguration={{
							twaReturnUrl: 'https://t.me/CryptoTrapezitBot'
						}}>
						<GlobalStyle />
						<App />
					</TonConnectUIProvider>
				</ChakraProvider>
			</Provider>
		</Router>
	);
}
