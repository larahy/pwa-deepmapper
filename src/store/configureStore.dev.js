import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux'
import storage from 'redux-persist/es/storage'
import {persistReducer} from 'redux-persist'
import {AppReducer} from '../reducers/AppReducer'
import {watcherSaga} from '../sagas'

const sagaMiddleware = createSagaMiddleware()

export default (history) => {

    const persistConfig = {
        key: 'root',
        storage,
    }

    const persistedReducer = persistReducer(persistConfig, AppReducer)

    const middleware = [thunk, promiseMiddleware(), routerMiddleware(history), sagaMiddleware];
    const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

    const enhancer = composeEnhancers(applyMiddleware(...middleware),);
    const store = createStore((persistedReducer), enhancer)
    syncHistoryWithStore(history, store)
    store.runSaga = sagaMiddleware.run
    store.runSaga(watcherSaga)


    return store
}
