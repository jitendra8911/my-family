import React, {useState} from 'react';
import Moment from "./components/Moments/Moment";
import Moments from "./components/Moments/Moments";
import {BrowserRouter, Link, Route, Switch, useParams, NavLink} from "react-router-dom";
import Home from "./Home";
import About from "./components/About/About";
import {FAMILY} from "./constants/global";
import './App.css';
import {Burger, Menu} from './components';

export default function App() {
    const routes = [
        {
            path: '/about/:personId',
            component: About
        },

        {
            path: "/moments/:personId/:momentId",
            component: Moment
        },
        {
            path: '/moments/:personId',
            component: Moments
        },
        {
            path: '/',
            component: Home
        },
    ];
    const [personName, setPersonName] = useState('amma');
    const [view, setView] = useState('about');
    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
        <div className="container">
            <div>
                <Burger open={burgerOpen} setOpen={setBurgerOpen}/>
            </div>
            <BrowserRouter>
                <div className="side-nav">
                    <Menu setPersonName={setPersonName} personName={personName} open={burgerOpen} setOpen={setBurgerOpen}/>
                </div>
                <div className="top-nav">
                    <NavLink to={{pathname: `/about/${personName}`, state: {personName}}} onClick={() => setView('about')} activeClassName="selected" isActive={(match, location) => {
                        console.log('location ', location);
                        if (location?.pathname === '/' || location?.pathname === '/my-family/home') {
                            return view === 'about';
                        }

                        return new RegExp('about').test(location.pathname);

                    }}>About</NavLink>
                    <NavLink to={{pathname: `/moments/${personName}`, state: {personName}}} onClick={() => setView('moments')} activeClassName="selected" isActive={(match, location) => {
                        if (location?.pathname === '/' || location?.pathname === '/my-family/home') {
                            return view === 'moments';
                        }
                        return new RegExp('moments').test(location.pathname);
                    }}>Moments</NavLink>
                </div>
                <div className="content">
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </div>
            </BrowserRouter>
        </div>

    )
}

function RouteWithSubRoutes(route: any) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    )
}