import { handleActions } from 'redux-actions';
import {
    photoSkippedSuccess,
    audioSkippedSuccess,
    streetViewSkippedSuccess,
    infoStepCompletedSuccess,
    audioStepCompletedSuccess,
    photoStepCompletedSuccess,
    selectPlacecastAddress,
    updatePlacecastCoordinates,
    addPlacecastPOV,
    streetViewStepCompletedSuccess,
    loadPhotoFile
} from '../actions/placecasts/create'
import { attributesReducersFor } from './AttributesReducer'
import {uploadSucceeded} from '../actions/s3'
import {postPlacecastFailed, postPlacecastSucceeded} from '../actions/placecasts'
const initialState = {
    photoSkipped: false,
    audioSkipped: false,
    streetViewSkipped: false,
    readyToSubmitPhoto: false,
    photoSrc: '',
    audioSrc: '',
    attributes: [],
    address: {},
    photoFile: '',
    saved: false,
    published: false
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
    [audioStepCompletedSuccess]: (state, action) => {
        return {...state, audioSrc: action.payload }
    },
    [photoStepCompletedSuccess]: (state) => {
        return {...state}
    },
    [streetViewStepCompletedSuccess]: (state) => {
        return {...state}
    },
    [uploadSucceeded]: (state, action) => {
        return ({ ...state, s3PhotoFileName: action.response.photoFileName, s3AudioFileName: action.response.audioFileName })
    },
    [selectPlacecastAddress]: (state, action) => {
        return ({ ...state, address: action.payload})
    },
    [updatePlacecastCoordinates]: (state, action) => {
        const mergedaddress = { ...state.address, ...action.payload };
        return ({ ...state, address: mergedaddress } )
    },
    [loadPhotoFile]: (state, action) => {
        return ({ ...state, photoFile: action.payload, readyToSubmitPhoto: true } )
    },
    [postPlacecastSucceeded().type]: (state, action) => {
        return { ...state,
            saved: true,
            published: action.createdPlacecast.content.published,
            location: action.createdPlacecast.location,
            photoSrc: action.createdPlacecast.content.s3_photo_filename,
            photoFile: ''
        }
    },
    [postPlacecastFailed().type]: (state, action) => {
        return { ...state, published: false}
    },
    [addPlacecastPOV]: (state, action) => {
        const mergedaddress = { ...state.address, ...action.payload };
        return ({ ...state, address: mergedaddress } )    }
}, initialState)
