import { handleActions } from 'redux-actions';
import {
    photoSkippedSuccess,
    audioSkippedSuccess,
    infoStepCompletedSuccess,
    audioStepCompletedSuccess
} from '../actions/placecasts/create'
import { attributesReducersFor } from './AttributesReducer'
import {uploadPhotoSucceeded, uploadAudioClipSucceeded} from '../actions/s3'
const initialState = {
    photoSkipped: false,
    audioSkipped: false,
    photoSrc: '',
    audioSrc: '',
    attributes: []
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
    }
}, initialState)