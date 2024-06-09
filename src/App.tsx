import { Container, Flex, Spinner } from '@chakra-ui/react';
import { Authorization } from '@pages/authorization/authorization.tsx';
import { Home } from '@pages/home/home.tsx';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Flex flexDirection='column'>
			<Container padding={1} borderRadius={30}>
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
