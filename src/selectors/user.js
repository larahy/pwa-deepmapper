import {createSelector} from 'reselect'
import { propertyOrNull, propertyOrUndefined} from './common'
import {AttributeScopes} from '../constants/attributes'

export const getUser = state => propertyOrNull(state, AttributeScopes.USER)

export const getLoginStatus =  createSelector([getUser], user => {
    return propertyOrUndefined(user, 'isLoggedIn')
})