import { AddIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Wrap,
	WrapItem
} from '@chakra-ui/react';
import { useTonWallet } from '@tonconnect/ui-react';
import { ButtonCustom } from './header.styles';

const tg = window.Telegram?.WebApp;

export const Header = () => {
	const id = tg?.initDataUnsafe?.user;
	const wallet = useTonWallet();

	console.log('wallet', tg);

	return (
		<Flex justifyContent='end' gap={3}>
			{/*<Wrap>*/}
			{/*	<WrapItem>*/}
			{/*		<Avatar size={'sm'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />*/}
			{/*	</WrapItem>*/}
			{/*</Wrap>*/}

			<InputGroup>
				<InputRightElement pointerEvents='none'>
					<ButtonCustom>
						<AddIcon />
					</ButtonCustom>
				</InputRightElement>
				<Input type='tel' placeholder='Создай задачу' />
			</InputGroup>
		</Flex>
	);
};
