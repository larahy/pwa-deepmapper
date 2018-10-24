import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import {PlacecastsReducer} from './PlacecastsReducer'
import {s3Reducer} from './s3Reducer'
import {CreateReducer} from './createReducer'
import {SessionReducer} from './SessionReducer'
import {LoginReducer} from './LoginReducer'
import {UserReducer} from './UserReducer'
import { dependencies } from './dependencies'

export const AppReducer = combineReducers({
    placecasts: PlacecastsReducer,
    s3: s3Reducer,
    create: CreateReducer,
    session: SessionReducer,
    login: LoginReducer,
    user: UserReducer,
    dependencies: dependencies,
    routing: routerReducer
});