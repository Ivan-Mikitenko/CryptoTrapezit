import { myTransaction } from '../../../controller/transaction.const.ts';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useTonConnectUI } from '@tonconnect/ui-react';

export const Menu = () => {
	const [tonConnectUI, setOptions] = useTonConnectUI();

	return (
		<Flex alignItems='center' justifyContent='center' height='100vh' flexDirection='column' gap={2}>
			<Text>Совершите первую транзакцию 💸</Text>
			<Button onClick={() => tonConnectUI.sendTransaction(myTransaction)}>Начинаем</Button>
		</Flex>
	);
};
