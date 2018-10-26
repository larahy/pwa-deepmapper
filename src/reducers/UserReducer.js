import { handleActions } from 'redux-actions'
import {logoutSucceeded} from '../actions/session'
import {fetchLoggedInExpertFailed, fetchLoggedInExpertSucceeded} from '../actions/experts'

const initialState = {}

export const UserReducer = handleActions({
    [fetchLoggedInExpertSucceeded]: (state, action) => {
        return { ...state, ...action.payload.response }
    },
    [logoutSucceeded]: () => initialState,
    [fetchLoggedInExpertFailed]: () => initialState
}, initialState)
