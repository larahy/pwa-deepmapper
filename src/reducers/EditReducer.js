import { handleActions } from 'redux-actions';
import {
    cancelPhotoEdit,
    editUploadPhotoFileSuccess,
    populateEdit,
    updateIsEditing,
    cancelMapEdit,
    editAddress,
    saveNewAddress,
    cancelAudioEdit,
    saveNewAudio,
    editAudio,
    updateIsEditingAudio
} from '../actions/edit'
import {uploadPhotoFailed, uploadPhotoSucceeded} from '../actions/s3'
import {uploadPhotoFileSuccess} from '../actions/create2'
const initialState = {
    placecast: {},
    isEditing: false,
    displayEditVisualsButton: true,
    displayEditAudioButton: true,
    displaySaveOrCancelButtons: false,
    displaySaveOrCancelAudioButtons: false
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
    [updateIsEditing]: (state) => {
        return ({ ...state, isEditing: true, displayEditVisualsButton: false } )
    },
    [updateIsEditingAudio]: (state) => {
        return ({ ...state, isEditingAudio: true, displayEditAudioButton: false } )
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
    [cancelAudioEdit]: (state) => {
        return ({ ...state, newAudioSrc: null, isEditingAudio: false, displaySaveOrCancelAudioButtons: false, displayEditAudioButton: true } )
    },
    [editAddress]: (state, action) => {
        const mergedaddress = { ...state.newAddress, ...action.payload };
        return ({ ...state, newAddress: mergedaddress, displaySaveOrCancelButtons: true, displayEditVisualsButton: false } )
    },
    [saveNewAddress]: (state) => {
        return ({ ...state, isEditing: false, displaySaveOrCancelButtons: false, displayEditVisualsButton: true } )
    },
    [editAudio]: (state, action) => {
        return ({ ...state, isEditingAudio: false, newAudioSrc: action.payload, displaySaveOrCancelAudioButtons: true, displayEditAudioButton: false } )
    },
    [saveNewAudio]: (state) => {
        return ({ ...state, newAudioSrc: null, isEditing: false, displaySaveOrCancelAudioButtons: false, displayEditAudioButton: true } )
    },
}, initialState)
