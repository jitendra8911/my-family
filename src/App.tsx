import React, { useRef, useState } from 'react';
import { BrowserRouter, Route, Switch, NavLink, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';
import theme from './theme';
import GlobalStyles from './global-styles';
import routes from './routes';
import TopNav from './components/Top-Nav';
import { useOnClickOutside } from './custom-hooks';
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
