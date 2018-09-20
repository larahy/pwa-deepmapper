import { handleActions } from 'redux-actions';
import {
    photoSkippedSuccess,
    audioSkippedSuccess,
    streetViewSkippedSuccess,
    infoStepCompletedSuccess,
    audioStepCompletedSuccess,
    selectPlacecastAddress,
    updatePlacecastCoordinates, addPlacecastPOV
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
    [uploadPhotoSucceeded]: (state, action) => {
        return ({ ...state, photoSrc: action.response.Location})
    },
    [uploadAudioClipSucceeded]: (state, action) => {
        return ({ ...state, audioSrc: action.response.Location})
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