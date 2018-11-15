import handleActions from 'redux-actions/es/handleActions'
import {addError, removeError} from '../actions/Errors'

const initialState = {}

export const ErrorsReducer = handleActions({
    [addError]: (state, action) => {
        console.log('action ', action.payload)
        return {...state, code: action.payload}
    },
    [removeError]: () => {
        return initialState;
    },
}, initialState)