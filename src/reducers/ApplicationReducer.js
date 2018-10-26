import { handleActions } from 'redux-actions'
import { attributesReducersFor } from './AttributesReducer'
import { Scopes } from '../constants/attributes'
import {becomeAnExpertFailed, becomeAnExpertSucceeded} from '../actions/experts'


const initialState = { attributes: [] }

export const ApplicationReducer = handleActions({
    ...attributesReducersFor(Scopes.APPLICATION),
    [becomeAnExpertSucceeded().type]: (state) => {
        return { ...state, applicationSuccess: true}
    },
    [becomeAnExpertFailed().type]: (state) => {
        return { ...state, applicationSuccess: false}
    },
}, initialState)
