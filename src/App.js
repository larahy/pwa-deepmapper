import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux';
import { syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import { createHashHistory } from 'history'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {AppRouter} from './pages/AppRouter';
import {AppReducer} from './reducers/AppReducer';
import { watcherSaga } from './sagas'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, AppReducer)

export const hashHistory = createHashHistory();
const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, promiseMiddleware(), routerMiddleware(hashHistory), sagaMiddleware];
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware),);
export const store = createStore((persistedReducer), enhancer)

const persistor = persistStore(store)

syncHistoryWithStore(hashHistory, store)
store.runSaga = sagaMiddleware.run
store.runSaga(watcherSaga)

export const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
        </PersistGate>
    </Provider>
);


