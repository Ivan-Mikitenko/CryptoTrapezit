import { Flex } from '@chakra-ui/react';
import { styled } from 'styled-components';

export const FlexCustom = styled(Flex)`
	background-color: ${({ theme }) => theme.secondaryBgColor};
`;
