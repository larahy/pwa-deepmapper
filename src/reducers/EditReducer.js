import { handleActions } from 'redux-actions';
import {cancelPhotoEdit, populateEdit, selectPhotoSuccess, updateIsEditing} from '../actions/edit'
import {uploadPhotoFailed, uploadPhotoSucceeded} from '../actions/s3'
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
    [uploadPhotoSucceeded]: (state) => {
        return ({ ...state, isEditing: false, displaySaveOrCancelButtons: false, displayEditVisualsButton: true} )
    },
    [uploadPhotoFailed]: (state, action) => {
        return ({ ...state, isEditing: false, errors: action.error } )
    },
    [cancelPhotoEdit]: (state) => {
        return ({ ...state, isEditing: false, newPhotoFile: null, displaySaveOrCancelButtons: false, displayEditVisualsButton: true } )
    },
}, initialState)
