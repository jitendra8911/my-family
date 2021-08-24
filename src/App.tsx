import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';
import theme from './theme';
import GlobalStyles from './global-styles';
import routes from './routes';

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

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="container">
          <div>
            <Burger open={burgerOpen} setOpen={setBurgerOpen} />
          </div>
          <BrowserRouter>
            <div className="side-nav">
              <Menu setPersonName={setPersonName} personName={personName} open={burgerOpen} setOpen={setBurgerOpen} />
            </div>
            <div className="top-nav">
              <NavLink
                to={{ pathname: `/about/${personName}`, state: { personName } }}
                onClick={() => setView('about')}
                activeClassName="selected"
                isActive={(match, location) => {
                  if (location?.pathname === '/' || location?.pathname === '/my-family/home') {
                    return view === 'about';
                  }

                  return new RegExp('about').test(location.pathname);
                }}
              >
                About
              </NavLink>
              <NavLink
                to={{ pathname: `/moments/${personName}`, state: { personName } }}
                onClick={() => setView('moments')}
                activeClassName="selected"
                isActive={(match, location) => {
                  if (location?.pathname === '/' || location?.pathname === '/my-family/home') {
                    return view === 'moments';
                  }
                  return new RegExp('moments').test(location.pathname);
                }}
              >
                Moments
              </NavLink>
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
