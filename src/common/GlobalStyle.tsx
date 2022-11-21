import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }
  body {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    outline: none;
  };
  input {
    outline: none;
  }
  a {
    text-decoration: none;
    &, &:visited, &:active { color: #000; }
    color: inherit;
  }
`;
