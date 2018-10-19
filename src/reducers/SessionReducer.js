import { handleActions } from 'redux-actions'
import {loginSucceeded, logoutSucceeded} from '../actions/session'

const initialState = {}

export const SessionReducer = handleActions({
    [loginSucceeded]: (state, action) => {
        return action.payload
    },
    [logoutSucceeded]: () => initialState,
}, initialState)