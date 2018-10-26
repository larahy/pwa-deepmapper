import { handleActions } from 'redux-actions'
import { attributesReducersFor } from './AttributesReducer'
import { Scopes } from '../constants/attributes'
import {becomeADeepmapperFailed, becomeADeepmapperSucceeded} from '../actions/user'


const initialState = { attributes: [] }

export const ApplicationReducer = handleActions({
    ...attributesReducersFor(Scopes.APPLICATION),
    [becomeADeepmapperSucceeded().type]: (state) => {
        return { ...state, applicationSuccess: true}
    },
    [becomeADeepmapperFailed().type]: (state) => {
        return { ...state, applicationSuccess: false}
    },
}, initialState)
