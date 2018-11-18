import handleActions from 'redux-actions/es/handleActions'
import {addError, removeError} from '../actions/Errors'

const initialState = {}

export const ErrorsReducer = handleActions({
    [addError]: (state, action) => {
        return {...state, code: action.payload.status, statusText: action.payload.statusText, data: action.payload.data}
    },
    [removeError]: () => {
        return initialState;
    },
}, initialState)