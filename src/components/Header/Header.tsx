import { Flex, Wrap, WrapItem } from '@chakra-ui/react';
import { useTonWallet } from '@tonconnect/ui-react';
import React from 'react';

const tg = window.Telegram?.WebApp;

export const Header = () => {
	const id = tg?.initDataUnsafe?.user;
	const wallet = useTonWallet();

	console.log('wallet', tg);

	return (
		<Flex justifyContent='end'>
			<Wrap>
				<WrapItem>{/*<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />*/}</WrapItem>
			</Wrap>
		</Flex>
	);
};
