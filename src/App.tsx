import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '@pages/NotFound/NotFound.tsx';
import { Loading } from '@components/Loading/Loading.tsx';
import { Header } from '@pages/Home/Header/Header.tsx';
import { Menu } from '@pages/Home/Menu/Menu.tsx';
import { Container } from './styles/container.styles.ts';

function App() {
	console.log('window', window);

	return (
		// if(подключен кошелёк)
		<Container>
			<Header />
			<Routes>
				<Route
					path={'/CryptoTrapezit'}
					element={
						<Suspense fallback={<Loading />}>
							<Menu />
						</Suspense>
					}></Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Container>
		// if(НЕ подключен кошелёк)
	);
}

export default App;
