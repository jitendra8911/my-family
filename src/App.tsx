import React from 'react';
import Moment from "./components/Moments/Moment";
import Moments from "./components/Moments/Moments";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";

export default function App() {
    const routes = [
        {
            path: "/moments/:personId/:momentId",
            component: Moment
        },
        {
            path: '/moments',
            component: Moments
        }
    ];

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" children={<Home/>}/>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
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