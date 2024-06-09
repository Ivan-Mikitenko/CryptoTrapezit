import { Container } from '@chakra-ui/react';
import { Header } from '@components/Header/Header.tsx';
import { Menu } from '@components/Menu/menu.tsx';
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

export const Home = () => {
	useEffect(() => {
		tg.ready();
	}, []);

	const onClose = () => {
		tg.close();
	};

	return (
		<Container padding={1}>
			<Header />
			<Menu />
		</Container>
	);
};
