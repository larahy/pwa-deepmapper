import { handleActions } from 'redux-actions';
import {
    photoSkippedSuccess,
    infoStepCompletedSuccess
} from '../actions/placecasts/create'
import { attributesReducersFor } from './AttributesReducer'
import {uploadPhotoSucceeded} from '../actions/s3'
const initialState = {
    photoSkipped: false,
    photoSrc: '',
    attributes: []
};

export const CreateReducer = handleActions({
    ...attributesReducersFor('create'),

    [photoSkippedSuccess]: state => ({
        ...state,
        photoSkipped: true
    }),
    [infoStepCompletedSuccess]: (state) => {
        return { ...state, photoSkipped: false}
    },
    [uploadPhotoSucceeded]: (state, action) => {
        return ({ ...state, photoSrc: action.response.Location})
    }
}, initialState)