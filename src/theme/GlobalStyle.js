import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  };

  body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    font-family: "Neo둥근모 Code", "Neo둥근모Code", "neodgm-code";
    margin: 0;
  }
`