import {createStore, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

export const history = createHistory();

import {AppReducer} from '../reducers/AppReducer';

const middleware = [thunk, promiseMiddleware(), routerMiddleware(history)];
const initialState = {};

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
);

export const createAppStore = () => {
    return createStore(connectRouter(history)(AppReducer),
        initialState,
        enhancer);
};