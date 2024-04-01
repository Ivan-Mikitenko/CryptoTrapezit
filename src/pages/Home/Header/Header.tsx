import { HeaderMain } from '@pages/Home/Header/header.styles.ts';
import { Desc, H1 } from '../../../styles/text.styles.ts';

const tg = window.Telegram.WebApp;
export const Header = () => {
	const id = tg?.initDataUnsafe?.user;

	console.log('user', id);

	console.log('first_name', tg?.initDataUnsafe?.user?.first_name);
	console.log('last_name', tg?.initDataUnsafe?.user?.last_name);
	console.log('username', tg?.initDataUnsafe?.user?.username);
	console.log('language_code', tg?.initDataUnsafe?.user?.language_code);

	return (
		<HeaderMain>
			<div>имя {tg?.initDataUnsafe?.user?.first_name}</div>
			<div>фамилия {tg?.initDataUnsafe?.user?.last_name}</div>
			<div>тег {tg?.initDataUnsafe?.user?.username}</div>
			<div>код языка {tg?.initDataUnsafe?.user?.language_code}</div>
			<div>
				<H1></H1>
				<Desc></Desc>
			</div>
		</HeaderMain>
	);
};
