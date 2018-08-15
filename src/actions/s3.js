import {createAction} from 'redux-actions'

export const fetchBucketContentsRequested = createAction('FETCH_BUCKET_CONTENTS_REQUESTED')
export const fetchBucketContentsSucceeded = createAction('FETCH_BUCKET_CONTENTS_SUCCEEDED')
export const fetchBucketContentsFailed = createAction('FETCH_BUCKET_CONTENTS_FAILURE')

export const uploadAudioClipRequested = createAction('UPLOAD_AUDIO_CLIP_REQUESTED')
export const uploadAudioClipSucceeded = createAction('UPLOAD_AUDIO_CLIP_SUCCEEDED')
export const uploadAudioClipFailed = createAction('UPLOAD_AUDIO_CLIP_FAILURE')

