import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  };

  body {
    /* animation: blue-me 5ms infinite; */
  }
  /* @keyframes blue-me {
    28%{ background: #171DA8; }
    30% { background: rgba(#171DA8,0.95);}
    33%{ background: #171DA8; }
    34% { background: rgba(#171DA8,0.9);}
    35%{ background: #171DA8; }
  } */

  button {
    outline: 0;
    cursor: pointer;
    border: 0;
  }


  body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    font-family: "Neo둥근모 Code", "Neo둥근모Code", "neodgm-code" !important; 
    margin: 0;
  }
`;
