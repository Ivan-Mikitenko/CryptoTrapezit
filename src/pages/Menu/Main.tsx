import { useEffect } from 'react';
import { Button } from '@components/Button/Button.tsx';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const tg = window.Telegram.WebApp;
export const Menu = () => {
	useEffect(() => {
		tg.ready();
	}, []);

	const onClose = () => {
		tg.close();
	};

	return (
		<>
			<div>Меню</div>
			<Button onClick={onClose} text={'Закрыть'} />
		</>
	);
};
