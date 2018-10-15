import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux';
import { syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import { createHashHistory } from 'history'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createSagaMiddleware from 'redux-saga'

import {AppRouter} from './pages/AppRouter';
import {AppReducer} from './reducers/AppReducer';
import { watcherSaga } from './sagas'

export const hashHistory = createHashHistory();
const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, promiseMiddleware(), routerMiddleware(hashHistory), sagaMiddleware];
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware),);
export const store = createStore((AppReducer), enhancer)

syncHistoryWithStore(hashHistory, store)
store.runSaga = sagaMiddleware.run
store.runSaga(watcherSaga)

export const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);