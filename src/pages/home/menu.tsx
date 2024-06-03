import { useEffect } from 'react';
import { Header } from '@components/Header/Header.tsx';
import { Menu } from '@components/Menu/menu.tsx';

const tg = window.Telegram.WebApp;

export const Home = () => {
	useEffect(() => {
		tg.ready();
	}, []);

	const onClose = () => {
		tg.close();
	};

	return (
		<>
			<Header />
			<Menu />
		</>
	);
};
