import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import {PlacecastsReducer} from './PlacecastsReducer'
import {s3Reducer} from './s3Reducer'
import {CreateReducer} from './createReducer2'
import {SessionReducer} from './SessionReducer'
import {LoginReducer} from './LoginReducer'
import { dependencies } from './dependencies'
import {ExpertsReducer} from './ExpertsReducer'
import {ApplicationReducer} from './ApplicationReducer'
import {EditReducer} from './EditReducer'

export const AppReducer = combineReducers({
    placecasts: PlacecastsReducer,
    s3: s3Reducer,
    create: CreateReducer,
    session: SessionReducer,
    login: LoginReducer,
    dependencies: dependencies,
    experts: ExpertsReducer,
    application: ApplicationReducer,
    edit: EditReducer,
    routing: routerReducer
});