import { createSelector } from 'reselect'
import {propertyOrNull} from './common'
import {Scopes} from '../constants/attributes'

export const getSession = state => propertyOrNull(state, Scopes.SESSION)

export const getToken = createSelector(
    [ getSession ],
    session => propertyOrNull(session, 'token'))

export const isLoggedIn = createSelector(
    [ getToken ],
    token => token !== null)


export const getLoggedInUserId = createSelector(
    [ getSession ],
    session => propertyOrNull(session, 'userId'))
