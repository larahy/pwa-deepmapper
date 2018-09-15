import { handleActions } from 'redux-actions';
import {
    photoSkippedSuccess,
    audioSkippedSuccess,
    infoStepCompletedSuccess
} from '../actions/placecasts/create'
import { attributesReducersFor } from './AttributesReducer'
import {uploadPhotoSucceeded} from '../actions/s3'
const initialState = {
    photoSkipped: false,
    audioSkipped: false,
    photoSrc: '',
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
        return { ...state, photoSkipped: false}
    },
    [uploadPhotoSucceeded]: (state, action) => {
        return ({ ...state, photoSrc: action.response.Location})
    }
}, initialState)