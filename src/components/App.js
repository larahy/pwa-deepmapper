import React from 'react';
import {Provider} from 'react-redux';

import {history, createAppStore} from '../components/state/stores/AppStore';
import {AppRouter} from './routers/AppRouter';

export const App = () => (
    <Provider store={createAppStore()}>
        <AppRouter history={history}/>
    </Provider>
);