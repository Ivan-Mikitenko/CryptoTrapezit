import { HeaderMain } from '@pages/Home/Header/header.styles.ts';
import { Desc, H1 } from '../../../styles/text.styles.ts';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;
export const Header = () => {
	const id = tg?.initDataUnsafe?.user;

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
