import { handleActions } from 'redux-actions';
import {fetchBucketContentsSucceeded, fetchBucketContentsFailed, fetchBucketContentsRequested, uploadAudioClipRequested, uploadAudioClipFailed, uploadAudioClipSucceeded} from '../actions/s3';

const initialState = {
    fetching: false,
    items: [],
    error: null,
    fileUploadProcessing: false,
    fileUploadSuccess: false
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
    [uploadAudioClipRequested]: state => ({ ...state, error: null, fileUploadProcessing: true }),
    [uploadAudioClipFailed]: (state, action) => ({ ...state, error: action.error, fileUploadProcessing: false }),
    [uploadAudioClipSucceeded]: state => ({ ...state, fileUploadSuccess: true, fileUploadProcessing: false }),
}, initialState)