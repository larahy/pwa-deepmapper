import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import {PlacecastsReducer} from './PlacecastsReducer'
import {s3Reducer} from './s3Reducer'
import {CreateReducer} from './createReducer'
import {SessionReducer} from './SessionReducer'
import {LoginReducer} from './LoginReducer'
import { dependencies } from './dependencies'
import {ExpertsReducer} from './ExpertsReducer'
import {ApplicationReducer} from './ApplicationReducer'

export const AppReducer = combineReducers({
    placecasts: PlacecastsReducer,
    s3: s3Reducer,
    create: CreateReducer,
    session: SessionReducer,
    login: LoginReducer,
    dependencies: dependencies,
    experts: ExpertsReducer,
    application: ApplicationReducer,
    routing: routerReducer
});