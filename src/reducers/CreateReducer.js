import { handleActions } from 'redux-actions';
import {
    photoSkippedSuccess,
    audioSkippedSuccess,
    streetViewSkippedSuccess,
    infoStepCompletedSuccess,
    audioStepCompletedSuccess,
    selectPlacecastAddress,
    updatePlacecastCoordinates,
    addPlacecastPOV,
    streetViewStepCompletedSuccess
} from '../actions/placecasts/create'
import { attributesReducersFor } from './AttributesReducer'
import {uploadPhotoSucceeded, uploadAudioClipSucceeded} from '../actions/s3'
const initialState = {
    photoSkipped: false,
    audioSkipped: false,
    streetViewSkipped: false,
    photoSrc: '',
    audioSrc: '',
    attributes: [],
    address: {}
};

export const CreateReducer = handleActions({
    ...attributesReducersFor('create'),

    [photoSkippedSuccess]: state => ({
        ...state,
        photoSkipped: true
    }),
    [audioSkippedSuccess]: state => ({
        ...state,
        audioSkipped: true
    }),
    [streetViewSkippedSuccess]: state => ({
        ...state,
        streetViewSkipped: true
    }),
    [infoStepCompletedSuccess]: (state) => {
        return { ...state}
    },
    [audioStepCompletedSuccess]: (state) => {
        return {...state}
    },
    [streetViewStepCompletedSuccess]: (state) => {
        return {...state}
    },
    [uploadPhotoSucceeded]: (state, action) => {
        return ({ ...state, photoSrc: action.response.Key})
    },
    [uploadAudioClipSucceeded]: (state, action) => {
        console.log('action.response', action.response)
        return ({ ...state, audioSrc: action.response.Key})
    },
    [selectPlacecastAddress]: (state, action) => {
        return ({ ...state, address: action.payload})
    },
    [updatePlacecastCoordinates]: (state, action) => {
        const mergedaddress = { ...state.address, ...action.payload };
        return ({ ...state, address: mergedaddress } )
    },
    [addPlacecastPOV]: (state, action) => {
        const mergedaddress = { ...state.address, ...action.payload };
        return ({ ...state, address: mergedaddress } )    }
}, initialState)