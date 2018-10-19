import { handleActions } from 'redux-actions'
import {logoutSucceeded} from '../actions/session'
import {fetchLoggedInUserFailed, fetchLoggedInUserSucceeded} from '../actions/user'

const initialState = {}

export const UserReducer = handleActions({
    [fetchLoggedInUserSucceeded]: (state, action) => {
        return { ...state, ...action.payload.response }
    },
    [logoutSucceeded]: () => initialState,
    [fetchLoggedInUserFailed]: () => initialState
}, initialState)
