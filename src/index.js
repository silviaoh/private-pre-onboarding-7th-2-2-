import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/Global.style';
import Router from './router';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme.style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.Fragment>
);
