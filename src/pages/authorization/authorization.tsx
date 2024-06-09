import { Text } from '@chakra-ui/react';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import { Outlet } from 'react-router-dom';
import { FlexCustom } from './authorization.styles';

export const Authorization = () => {
	const wallet = useTonWallet();

	if (!wallet) {
		return (
			<FlexCustom
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
			</FlexCustom>
		);
	}

	return <Outlet />;
};
