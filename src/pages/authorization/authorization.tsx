import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Flex, FormHelperText, Text } from '@chakra-ui/react';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';

export const Authorization = () => {
	const wallet = useTonWallet();

	if (!wallet) {
		return (
			<Flex
				height='100vh'
				justifyContent='center'
				alignItems='center'
				flexDirection='column'
				gap={2}>
				<Text fontSize='s' fontWeight='500'>
					Необходимо авторизоваться 🖐🏼
				</Text>
				<Text fontSize='sm' color='gray'>
					Это безопасно 🙏🏼
				</Text>
				<TonConnectButton />
			</Flex>
		);
	}

	return <Outlet />;
};
