import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const theme = {
  BLACK: '#232323',
  GREY: '#D9D9D9',
  RED: '#E80000',
  DEEP_BLUE: '#020080',
  WHITE: '#FEFDF8',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
