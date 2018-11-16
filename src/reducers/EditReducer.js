import { handleActions } from 'redux-actions';
import {
    cancelPhotoEdit,
    populateEdit,
    updateIsEditing,
    editAddress,
    saveNewAddress,
    cancelAudioEdit,
    editAudio,
    updateIsEditingAudio, editPhoto, publishPlacecastSuccess, deletePlacecastSuccess, updateIsEditingPhoto
} from '../actions/edit'
import {
    postPlacecastSucceeded,
    putPlacecastFailed,
    putPlacecastSucceeded,
    updateCurrentViewTo
} from '../actions/placecasts'
import {concat} from 'lodash'
const initialState = {
    placecast: {},
    isEditing: false,
    displayEditButton: true,
    displaySaveButton: false,

    photoEdited: false,
    displayEditPhotoButton: true,
    displayBinButton: false,

    audioEdited: false,
    displayEditAudioButton: true,
    displayAudioBinButton: false
};

export const EditReducer = handleActions({
    [updateIsEditingAudio]: (state) => {
        return ({ ...state, isEditingAudio: true, displayEditAudioButton: false } )
    },
    [editAudio]: (state, action) => {
        return ({ ...state, audioEdited: true, isEditingAudio: false, newAudioSrc: action.payload, displayAudioBinButton: true, displayEditAudioButton: false } )
    },
    [cancelAudioEdit]: (state) => {
        return ({ ...state,
            audioEdited: false,
            newAudioSrc: null,
            isEditingAudio: false,
            displayAudioBinButton: false,
            displayEditAudioButton: true } )
    },
    [updateIsEditingPhoto]: (state) => {
        return ({ ...state, isEditing: true, displayEditPhotoButton: false } )
    },
    [editPhoto]: (state, action) => {
        return ({ ...state,
            photoEdited: true,
            isEditing: false,
            newPhotoSrc: action.payload,
            displayEditPhotoButton: false,
            displayBinButton: true } )
    },
    [cancelPhotoEdit]: (state) => {
        return ({ ...state,
            photoEdited: false,
            newPhotoSrc: null, isEditing: false,
            displayEditPhotoButton: true,
            displayBinButton: false } )
    },

    [populateEdit]: (state, action) => {
        return { ...state, placecast: action.payload }
    },
    [updateIsEditing]: (state) => {
        return ({ ...state, isEditing: true, displayEditButton: false, displaySaveButton: true} )
    },
    [editAddress]: (state, action) => {
        const mergedaddress = { ...state.newAddress, ...action.payload };
        return ({ ...state, newAddress: mergedaddress} )
    },
    [updateCurrentViewTo]: (state) => {
        return ({ ...state, isEditing: false, displayEditButton: true, displaySaveButton: false} )
    },
    [saveNewAddress]: (state) => {
        return ({ ...state, isEditing: false, displaySaveButton: false, displayEditButton: true } )
    },
    [publishPlacecastSuccess]: () => initialState,
    [putPlacecastSucceeded]: () =>  {
        return initialState
    },
    [postPlacecastSucceeded]: () =>  {
        return initialState
    },
    [putPlacecastFailed]: (state, action) => {
        return { ...state, errors: concat(state.errors, action.payload.response.data)}
    },
    [deletePlacecastSuccess]: () =>  {
        return initialState
    },

}, initialState)
