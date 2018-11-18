import configureStore from './store/configureStore'
import {createHashHistory} from 'history'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import Provider from 'react-redux/es/components/Provider'
import React from 'react'
import {AppRouter} from './pages/AppRouter'

const hashHistory = createHashHistory()
const store = configureStore(hashHistory)
const persistor = persistStore(store)

export const App2 = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
        </PersistGate>
    </Provider>
);


