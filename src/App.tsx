import { Container, Flex, Spinner } from '@chakra-ui/react';
import { Header } from '@components/Header/Header.tsx';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Authorization } from '@pages/authorization/authorization.tsx';
import { Home } from '@pages/home/menu.tsx';

function App() {
	return (
		<Flex flexDirection='column'>
			<Container padding={2}>
				<Routes>
					<Route element={<Authorization />}>
						<Route
							path='/CryptoTrapezit'
							element={<Suspense fallback={<Spinner />}>{<Home />}</Suspense>}
						/>
					</Route>
					{/*<Route path='*' element={<NotFound />} />*/}
				</Routes>
			</Container>
		</Flex>
	);
}

export default App;
