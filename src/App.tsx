import React, { useRef, useState } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';
import theme from './theme';
import GlobalStyles from './global-styles';
import routes from './routes';
import TopNav from './components/Top-Nav';
import { useOnClickOutside } from './custom-hooks';

interface IPropsRouteWithSubRoutes {
  path: string;
  component: any;
}

function RouteWithSubRoutes({ path, component: Component }: IPropsRouteWithSubRoutes) {
  return (
    <Route
      path={path}
      render={(props) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Component {...props} />
      )}
    />
  );
}
export default function App() {
  const [personName, setPersonName] = useState('amma');
  const [view, setView] = useState('about');
  const [burgerOpen, setBurgerOpen] = useState(false);
  const node = useRef(null);
  useOnClickOutside(node, () => setBurgerOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="container">
          <BrowserRouter>
            <div className="side-nav" ref={node}>
              <Burger open={burgerOpen} setOpen={setBurgerOpen} />
              <Menu setPersonName={setPersonName} personName={personName} open={burgerOpen} setOpen={setBurgerOpen} />
            </div>
            <div className="top-nav">
              <TopNav personName={personName} view={view} setView={setView} />
            </div>
            <div className="content">
              <Switch>
                {routes.map((route, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <RouteWithSubRoutes key={i} path={route.path} component={route.component} />
                ))}
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </>
    </ThemeProvider>
  );
}
