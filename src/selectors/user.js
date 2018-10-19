// import {createSelector} from 'reselect'
import { propertyOrNull} from './common'
import {Scopes} from '../constants/attributes'

export const getCurrentUser = state => propertyOrNull(state, Scopes.USER)

