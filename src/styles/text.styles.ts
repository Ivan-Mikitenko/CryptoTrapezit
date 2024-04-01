// iOS:
// 	H1 (Заголовок 1): 28pt ≈ 37px
// H2 (Заголовок 2): 22pt ≈ 29px
// H3 (Заголовок 3): 20pt ≈ 27px
// Body (Основной текст/абзац): 17pt ≈ 23px

//Android
// H1 (Заголовок 1): 24sp ≈ 32px
// H2 (Заголовок 2): 20sp ≈ 27px
// H3 (Заголовок 3): 18sp ≈ 24px
// Body (Основной текст/абзац): 16sp ≈ 21px

import styled from 'styled-components';

export const H1 = styled.h1`
	font-size: 37px;
`;

export const H2 = styled.h2`
	font-size: 29px;
`;

export const H3 = styled.h3`
	font-size: 27px;
`;

export const Desc = styled.p`
	font-size: 23px;
`;
