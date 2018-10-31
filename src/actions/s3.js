import {createAction} from 'redux-actions'

export const fetchBucketContentsRequested = createAction('FETCH_BUCKET_CONTENTS_REQUESTED')
export const fetchBucketContentsSucceeded = createAction('FETCH_BUCKET_CONTENTS_SUCCEEDED')
export const fetchBucketContentsFailed = createAction('FETCH_BUCKET_CONTENTS_FAILURE')

export const uploadRequested = createAction('UPLOAD_REQUESTED')
export const uploadSucceeded = createAction('UPLOAD_SUCCEEDED')
export const uploadFailed = createAction('UPLOAD_FAILED')

export const uploadPhotoRequested = createAction('UPLOAD_PHOTO_REQUESTED')
export const uploadPhotoSucceeded = createAction('UPLOAD_PHOTO_SUCCEEDED')
export const uploadPhotoFailed = createAction('UPLOAD_PHOTO_FAILED')

