import { HeaderMain } from '@pages/Home/Header/header.styles.ts';
import { Desc, H1 } from '../../../styles/text.styles.ts';
import { TonConnectButton } from '@tonconnect/ui-react';

const tg = window.Telegram.WebApp;
export const Header = () => {
	const id = tg?.initDataUnsafe?.user;

	console.log('user', id?.user);

	console.log('first_name', tg?.initDataUnsafe?.user?.first_name);
	console.log('last_name', tg?.initDataUnsafe?.user?.last_name);
	console.log('username', tg?.initDataUnsafe?.user?.username);
	console.log('language_code', tg?.initDataUnsafe?.user?.language_code);

	return (
		<HeaderMain>
			{/*<img src={tg?.initDataUnsafe?.user?.photo_url} alt='Аватар' />*/}
			<TonConnectButton />
			<div>
				<H1>{tg?.initDataUnsafe?.user?.username}</H1>
				<Desc></Desc>
			</div>
		</HeaderMain>
	);
};
