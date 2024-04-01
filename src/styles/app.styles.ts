import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
			overflow: hidden;
  }

  * {
      padding: 0;
      margin: 0;
      list-style: none;
      outline: none;
      font-family: 'Nunito', Roboto, system-ui, Tahoma, sans-serif;
      box-sizing: border-box;
  }	

  a {
      color: inherit; 
      text-decoration: none; 
  }

  a:hover,
  a:focus {
      text-decoration: underline; 
  }
	
  ul,
  ol {
      list-style: none;
  }
	
  button,
  input,
  textarea,
  select {
      font: inherit; 
      color: inherit; 
      border: none; 
      outline: none; 
      background-color: transparent; 
  }

  button {
      cursor: pointer; 
  }

  button:disabled {
      cursor: default; 
  }

  body {
    background: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color);
  }
`;
