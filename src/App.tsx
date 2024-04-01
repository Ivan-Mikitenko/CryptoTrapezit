import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '@pages/NotFound/NotFound.tsx';
import { Loading } from '@components/Loading/Loading.tsx';
import { Header } from '@pages/Header/Header.tsx';
import { Menu } from '@pages/Menu/Main.tsx';
import './styles/App.scss';

function App() {
	console.log('window', window);

	return (
		// if(подключен кошелёк)
		<div>
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
		</div>
		// if(НЕ подключен кошелёк)
	);
}

export default App;
