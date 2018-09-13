import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import {PlacecastsReducer} from './PlacecastsReducer'
import {s3Reducer} from './s3Reducer'
import {CreateReducer} from './createReducer'

export const AppReducer = combineReducers({
    placecasts: PlacecastsReducer,
    s3: s3Reducer,
    create: CreateReducer,
    routing: routerReducer
});