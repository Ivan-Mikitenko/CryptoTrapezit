import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 100px 1fr;
	gap: 0 0;
	grid-template-areas:
		'Header'
		'Body';
`;
