import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './stores/configureStore'
import {AppRouter} from './components/routers/AppRouter';
import { watcherSaga } from './sagas'
const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(watcherSaga)
export const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);