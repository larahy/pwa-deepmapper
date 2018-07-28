import { combineReducers } from 'redux';

import { FetchZipCodesReducer } from '../reducers/FetchZipCodesReducer';
import {CounterReducer} from '../reducers/CounterReducer'

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer,
    counter: CounterReducer
});