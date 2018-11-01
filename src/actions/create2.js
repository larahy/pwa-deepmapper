import {createAction} from 'redux-actions'
import {
    goToCreateAudioPage,
    goToCreatePhotoPage, goToCreateReviewPage,
} from './navigation'
import {uploadRequested} from './s3'

//STEP 1 //
export const step1CompletedSuccess = createAction('INFO_STEP_COMPLETED_SUCCESS')
export const selectPlacecastAddress = createAction('SELECT_PLACECAST_ADDRESS')

export const step1Completed = () => {
    return stepCompletedThunk()
}
export const stepCompletedThunk = () => (dispatch) => {
    dispatch(step1CompletedSuccess())
    dispatch(goToCreatePhotoPage())
}


//STEP 2//
export const uploadPhotoFileSuccess = createAction('UPLOAD_PHOTO_FILE_SUCCESS')
export const createUploadPhotoFile = (file) => {
    return createUploadPhotoFileThunk(file)
}
export const createUploadPhotoFileThunk = (file) => (dispatch) => {
    dispatch(uploadPhotoFileSuccess(file))
    dispatch(goToCreateAudioPage())
}

export const photoSkippedSuccess = createAction('PHOTO_SKIPPED_SUCCESS')
export const step2Skipped = () => {
    return step2SkippedThunk()
}
export const step2SkippedThunk = () => dispatch => {
    dispatch(photoSkippedSuccess())
    dispatch(goToCreateAudioPage())
}

//STEP 3//
export const audioSkippedSuccess = createAction('AUDIO_SKIPPED_SUCCESS')
export const step3Skipped = () => {
    return step3SkippedThunk()
}
export const step3SkippedThunk = () => dispatch => {
    dispatch(audioSkippedSuccess())
    dispatch(goToCreateReviewPage())
}

export const audioAddedSuccess = createAction('AUDIO_ADDED_SUCCESS')
export const audioAdded = (audioSrc) => {
    return audioAddedThunk(audioSrc)
}
export const audioAddedThunk = (audioSrc) => (dispatch) => {
    dispatch(audioAddedSuccess(audioSrc))
    dispatch(goToCreateReviewPage())
}


//REVIEW/EDIT//

export const savePlacecastSuccess = createAction('SAVE_PLACECAST_SUCCESS')
export const savePlacecast = () => {
    return savePlacecastThunk()
}
export const savePlacecastThunk = () => (dispatch) => {
    dispatch(savePlacecastSuccess())
}

export const publishPlacecastSuccess = createAction('PUBLISH_PLACECAST_SUCCESS')
export const publishPlacecast = () => {
    return publishPlacecastThunk()
}
export const publishPlacecastThunk = () => (dispatch) => {
    dispatch(uploadRequested())
}

