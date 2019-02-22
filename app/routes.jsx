import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import configureStore, { history } from './store/configureStore';

import App from './App.jsx';
import HomeRoutes from 'modules/home/routes';
import TermsRoutes from 'modules/termsConditions/routes';
import PolicyRoutes from 'modules/privacyPolicy/routes';
import AboutUsRoutes from 'modules/aboutUs/routes';
import DevTools from 'components/devTools';
const store = configureStore(Immutable.Map());

const routes = [
    ...HomeRoutes,
    ...TermsRoutes,
    ...PolicyRoutes,
    ...AboutUsRoutes,
]

const RootApp = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <App>
                        {routes.map((route, index) => {
                            const { path, component } = route;
                            return (
                                <Route key={index} exact path={path} component={component}/>
                            )
                        })}
                        {process.env.NODE_ENV === 'production' ? <div/> : <DevTools/>}
                    </App>
                </Switch>
            </Router>
        </Provider>
    );
};

render(<RootApp/>, document.getElementById("app"));