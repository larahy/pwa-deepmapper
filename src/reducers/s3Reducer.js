import { handleActions } from 'redux-actions';
import {
    fetchBucketContentsSucceeded,
    fetchBucketContentsFailed,
    fetchBucketContentsRequested,
    uploadRequested,
    uploadSucceeded,
    uploadFailed
} from '../actions/s3';

const initialState = {
    fetching: false,
    items: [],
    error: null,
    uploadProcessing: false,
    uploadSuccess: false
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
    [uploadFailed]: (state, action) => ({ ...state, error: action.error, uploadProcessing: false }),
    [uploadSucceeded]: (state) => {
        return ({ ...state, uploadSuccess: true, uploadProcessing: false })
    }
}, initialState)