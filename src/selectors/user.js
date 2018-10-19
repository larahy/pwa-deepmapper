import {createSelector} from 'reselect'
import { propertyOrNull, propertyOrUndefined} from './common'
import {Scopes} from '../constants/attributes'

export const getUser = state => propertyOrNull(state, Scopes.USER)

