import { handleActions } from 'redux-actions';
import {populateEdit} from '../actions/edit'
const initialState = {
    placecast: {}
};

export const EditReducer = handleActions({
    [populateEdit]: (state, action) => {
        return { ...state, placecast: action.payload }
    },
}, initialState)
