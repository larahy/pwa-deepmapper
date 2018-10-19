import { handleActions } from 'redux-actions'
import { attributesReducersFor } from './AttributesReducer'
import { Scopes } from '../constants/attributes'
import {loginSucceeded} from '../actions/user/session'

const initialState = { attributes: [] }

export const LoginReducer = handleActions({
    ...attributesReducersFor(Scopes.LOGIN),

    [loginSucceeded]: () => initialState
}, initialState)
