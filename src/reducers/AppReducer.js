import { combineReducers } from 'redux';
import {PlacecastsReducer} from './PlacecastsReducer'
import {s3Reducer} from './s3Reducer'

export const AppReducer = combineReducers({
    placecasts: PlacecastsReducer,
    s3: s3Reducer
});