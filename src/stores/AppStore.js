import {createStore, applyMiddleware, compose} from 'redux';
import {AppReducer} from '../reducers/AppReducer';
import createHistory from 'history/createBrowserHistory'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createSagaMiddleware from 'redux-saga'
export const history = createHistory();
const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, promiseMiddleware(), routerMiddleware(history), sagaMiddleware];
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
