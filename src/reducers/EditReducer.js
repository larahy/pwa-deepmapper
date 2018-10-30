import { handleActions } from 'redux-actions';
import {populateEdit, selectPhotoSuccess, updateIsEditing} from '../actions/edit'
const initialState = {
    placecast: {},
    isEditing: false,
    displayEditVisualsButton: true,
    displaySaveOrCancelButtons: false
};

export const EditReducer = handleActions({
    [populateEdit]: (state, action) => {
        return { ...state, placecast: action.payload }
    },
    [selectPhotoSuccess]: (state, action) => {
        return ({ ...state, newPhotoFile: action.payload, isEditing: false, displaySaveOrCancelButtons: true } )
    },
    [updateIsEditing]: (state, action) => {
        return ({ ...state, isEditing: action.payload, displayEditVisualsButton: false } )
    },
}, initialState)
