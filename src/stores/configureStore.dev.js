import {createStore, applyMiddleware, compose} from 'redux'
import {AppReducer} from '../reducers/AppReducer';
import { createHashHistory } from 'history'
export const history = createHashHistory();
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createSagaMiddleware, { END } from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, promiseMiddleware(), routerMiddleware(history), sagaMiddleware];
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export default function configureStore(initialState) {
    const enhancer = composeEnhancers(
        applyMiddleware(...middleware),
    );
    const store = createStore(connectRouter(history)(AppReducer),
        initialState,
        enhancer)
    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)
    return store
}

