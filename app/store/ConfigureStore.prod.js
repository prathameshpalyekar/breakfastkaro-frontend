import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

const middlewares = [
    thunk,
];

const enhancer = compose(
    applyMiddleware(...middlewares)
);

export default function configureStore(initialState) {
    const store = createStore(
        createRootReducer(history),
        initialState,
        enhancer
    );

    return store;
}
