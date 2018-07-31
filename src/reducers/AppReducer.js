import { combineReducers } from 'redux';
import {CounterReducer} from './CounterReducer'
import {DogReducer} from './DogReducer'
import {PlacecastsReducer} from './PlacecastsReducer'

export const AppReducer = combineReducers({
    counter: CounterReducer,
    dogs: DogReducer,
    placecasts: PlacecastsReducer
});