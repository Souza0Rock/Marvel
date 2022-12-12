import {createGlobalStyle} from "styled-components";

export const ResetCSS = createGlobalStyle`
  html, body {
    font-family: 'Kanit', sans-serif;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.dark_700 };
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      filter: brightness(0.8);
    }
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    border: none;
  }

  button {
    cursor: pointer;
  }

  textarea:focus, input:focus {
    box-shadow: 0;
    outline: 0;
  }
`;
