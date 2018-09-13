import { handleActions } from 'redux-actions';
import {
    fetchBucketContentsSucceeded,
    fetchBucketContentsFailed,
    fetchBucketContentsRequested,
    uploadRequested,
    uploadAudioClipFailed,
    uploadAudioClipSucceeded,
    uploadPhotoSucceeded,
    uploadPhotoFailed
} from '../actions/s3';

const initialState = {
    fetching: false,
    items: [],
    photoError: null,
    audioError: null,
    uploadProcessing: false,
    audioUploadSuccess: false,
    photoUploadSuccess: false
};

export const s3Reducer = handleActions({
    [fetchBucketContentsRequested]: (state, ) => {
        return { ...state, fetching: true, error: null }
    },

    [fetchBucketContentsSucceeded().type]: (state, action) => {
        return { ...state, fetching: false, items: action.response }
    },

    [fetchBucketContentsFailed().type]: (state, action) => {
        return { ...state, fetching: false, items: null, error: action.error }
    },
    [uploadRequested]: state => ({ ...state, error: null, uploadProcessing: true }),
    [uploadAudioClipFailed]: (state, action) => ({ ...state, audioError: action.error, uploadProcessing: false }),
    [uploadAudioClipSucceeded]: state => ({ ...state, audioUploadSuccess: true, uploadProcessing: false }),
    [uploadPhotoFailed]: (state, action) => ({ ...state, photoError: action.error, uploadProcessing: false }),
    [uploadPhotoSucceeded]: (state) => {
        return ({ ...state, photoUploadSuccess: true, uploadProcessing: false })
    }
}, initialState)