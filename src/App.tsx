import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './global-styles';
import AppWithRouter from './AppWithRouter';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="container">
          <BrowserRouter>
            <AppWithRouter />
          </BrowserRouter>
        </div>
      </>
    </ThemeProvider>
  );
}
