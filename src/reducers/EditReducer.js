import { handleActions } from 'redux-actions';
import {
    cancelPhotoEdit,
    editUploadPhotoFileSuccess,
    populateEdit,
    updateIsEditing, cancelMapEdit, editAddress, saveNewAddress
} from '../actions/edit'
import {uploadPhotoFailed, uploadPhotoSucceeded} from '../actions/s3'
import {uploadPhotoFileSuccess} from '../actions/create2'
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
    [editUploadPhotoFileSuccess]: (state, action) => {
        return ({ ...state, newPhotoSrc: action.payload, isEditing: false, displaySaveOrCancelButtons: true } )
    },
    [uploadPhotoFileSuccess]: (state) => {
        return ({ ...state, newPhotoSrc: null, isEditing: false, displaySaveOrCancelButtons: false, displayEditVisualsButton: true } )
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
        return ({ ...state, isEditing: false, newPhotoSrc: null, displaySaveOrCancelButtons: false, displayEditVisualsButton: true } )
    },
    [cancelMapEdit]: (state) => {
        return ({ ...state, isEditing: false, newAddress: null, displaySaveOrCancelButtons: false, displayEditVisualsButton: true } )
    },
    [editAddress]: (state, action) => {
        const mergedaddress = { ...state.newAddress, ...action.payload };
        return ({ ...state, newAddress: mergedaddress, displaySaveOrCancelButtons: true, displayEditVisualsButton: false } )
    },
    [saveNewAddress]: (state) => {
        return ({ ...state, isEditing: false, displaySaveOrCancelButtons: false, displayEditVisualsButton: true } )
    },
}, initialState)
