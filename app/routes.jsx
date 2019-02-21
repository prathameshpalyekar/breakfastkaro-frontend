import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import configureStore, { history } from './store/configureStore';

import App from './App.jsx';
import HomeRoutes from 'modules/home/routes';
import Home from 'modules/home/views/Home';
import DevTools from 'components/DevTools';
const store = configureStore(Immutable.Map());

const routes = [
    ...HomeRoutes
]

const RootApp = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Switch>
                        {routes.map((route, index) => {
                            const { path, component } = route;
                            return (
                                <Route key={index} exact path={path} component={component}/>
                            )
                        })}
                    </Switch>
                    {process.env.NODE_ENV === 'production' ? <div/> : <DevTools/>}
                </App>
            </Router>
        </Provider>
    );
};

render(<RootApp/>, document.getElementById("app"));