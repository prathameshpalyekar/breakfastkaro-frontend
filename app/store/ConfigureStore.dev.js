import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';

import DevTools from 'components/DevTools';
export const history = createBrowserHistory();

const middlewares = [
    thunk,
];

const enhancer = compose(
    applyMiddleware(...middlewares),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
);

export default function configureStore(initialState) {
    const store = createStore(
        createRootReducer(history),
        initialState,
        enhancer
    );

    return store;
}
