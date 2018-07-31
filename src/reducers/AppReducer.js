import { combineReducers } from 'redux';

import { FetchZipCodesReducer } from './FetchZipCodesReducer';
import {CounterReducer} from './CounterReducer'
import {DogReducer} from './DogReducer'
import {PlacecastsReducer} from './PlacecastsReducer'

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer,
    counter: CounterReducer,
    dogs: DogReducer,
    placecasts: PlacecastsReducer
});