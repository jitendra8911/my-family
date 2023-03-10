import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Burger, Menu } from './components';
import TopNav from './components/Top-Nav';
import routes from './routes';
import { useOnClickOutside } from './custom-hooks';
import usePersonNameFromPath from './custom-hooks/usePersonNameFromPath';

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

export default function AppWithRouter() {
  const [personName, setPersonName] = useState('amma');
  const [view, setView] = useState('about');
  const [burgerOpen, setBurgerOpen] = useState(false);
  const node = useRef(null);
  const personNameFromPath = usePersonNameFromPath();

  useEffect(() => {
    if (personNameFromPath) {
      setPersonName(personNameFromPath);
    }
  }, [personNameFromPath]);
  useOnClickOutside(node, () => setBurgerOpen(false));
  return (
    <>
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
    </>
  );
}
