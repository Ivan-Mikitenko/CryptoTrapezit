import { ChakraProvider } from '@chakra-ui/react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import { store } from './store/store.ts';
import { GlobalStyle } from './styles/app.styles.ts';
import { theme } from './styles/theme.ts';

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
						<ThemeProvider theme={theme}>
							<GlobalStyle />
							<App />
						</ThemeProvider>
					</TonConnectUIProvider>
				</ChakraProvider>
			</Provider>
		</Router>
	);
}
