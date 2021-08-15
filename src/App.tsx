import React, {useState} from 'react';
import Moment from "./components/Moments/Moment";
import Moments from "./components/Moments/Moments";
import {BrowserRouter, Link, Route, Switch, useParams, NavLink} from "react-router-dom";
import Home from "./Home";
import About from "./components/About/About";
import {FAMILY} from "./constants/global";
import './App.css';

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

    return (
        <div className="home-container">
            <BrowserRouter>
                <div className="sidebar">
                    <div className="left-nav">
                        {FAMILY.map((familyMember) => {
                                const personName = familyMember.toLowerCase();
                                return (
                                    <div>
                                        <NavLink to={{pathname: `/about/${personName}`, state: {personName}}} onClick={() => setPersonName(personName)} activeClassName="selected"
                                        isActive={(match, location) => {
                                            console.log('NavLink match ', match);
                                            console.log('NavLink location ', location);
                                            if (!location) {
                                                return false;
                                            }

                                            // @ts-ignore
                                            return personName === location.state?.personName;
                                        }}
                                        >
                                            {familyMember}
                                        </NavLink>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
                <div className="main">
                    <div className="content-pane">
                        <div className="navigation-menu">
                            <NavLink to={{pathname: `/about/${personName}`, state: {personName}}} activeClassName="selected">About</NavLink>
                            <NavLink to={{pathname: `/moments/${personName}`, state: {personName}}} activeClassName="selected">Moments</NavLink>
                        </div>
                        <div className="content">
                            <Switch>
                                {routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                            </Switch>
                        </div>
                    </div>
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