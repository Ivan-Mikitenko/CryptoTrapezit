import { Button } from '@chakra-ui/react';
import styled from 'styled-components';

export const HeaderMain = styled.div`
	width: 100%;
	height: 100%;
	border: 2px solid red;
	grid-area: Header;
	display: flex;
	flex-direction: row;
`;

export const ButtonCustom = styled(Button)`
	background-color: ${({ theme }) => theme.buttonColor};
	color: ${({ theme }) => theme.buttonTextColor};
`;
