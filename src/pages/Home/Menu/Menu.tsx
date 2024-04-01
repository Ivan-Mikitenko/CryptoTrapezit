import { useEffect } from 'react';
import { MenuDefault } from '@pages/Home/Menu/menu.styles.ts';

const tg = window.Telegram.WebApp;
export const Menu = () => {
	useEffect(() => {
		tg.ready();
	}, []);

	const onClose = () => {
		tg.close();
	};

	return (
		<MenuDefault>
			<div>Меню</div>
			{/*<Button onClick={onClose} text={'Закрыть'} />*/}
		</MenuDefault>
	);
};
