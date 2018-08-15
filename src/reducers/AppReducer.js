import { combineReducers } from 'redux';
import {CounterReducer} from './CounterReducer'
import {DogReducer} from './DogReducer'
import {PlacecastsReducer} from './PlacecastsReducer'
import {s3Reducer} from './s3Reducer'

export const AppReducer = combineReducers({
    counter: CounterReducer,
    dogs: DogReducer,
    placecasts: PlacecastsReducer,
    s3: s3Reducer
});