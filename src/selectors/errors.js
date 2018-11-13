import {propertyOrEmptyObject} from './common'
import {Scopes} from '../constants/attributes'


export const getError = state => propertyOrEmptyObject(state, Scopes.ERROR)

