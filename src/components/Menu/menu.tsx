import { Flex } from '@chakra-ui/react';
import { useTonConnectUI } from '@tonconnect/ui-react';

export const Menu = () => {
	const [tonConnectUI, setOptions] = useTonConnectUI();

	return (
		<Flex
			alignItems='center'
			justifyContent='center'
			height='100vh'
			flexDirection='column'
			gap={2}></Flex>
	);
};
