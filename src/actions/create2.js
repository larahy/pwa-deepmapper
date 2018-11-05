import {createAction} from 'redux-actions'
import {
    goToCreateAudioPage,
    goToCreatePhotoPage, goToCreateReviewPage, goToMyDeepMapper,
} from './navigation'

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


//REVIEW/EDIT/DELETE//

export const savePlacecastSuccess = createAction('SAVE_PLACECAST_SUCCESS')
export const savePlacecastRequested = createAction('SAVE_PLACECAST_REQUESTED')
export const savePlacecastFailed = createAction('SAVE_PLACECAST_FAILED')
export const savePlacecast = (phase) => {
    return savePlacecastThunk(phase)
}
export const savePlacecastThunk = (phase) => (dispatch) => {
    dispatch(savePlacecastRequested(phase))
}

export const publishPlacecastSuccess = createAction('PUBLISH_PLACECAST_SUCCESS')
export const publishPlacecastRequested = createAction('PUBLISH_PLACECAST_REQUESTED')
export const publishPlacecastFailed = createAction('PUBLISH_PLACECAST_FAILED')
export const publishPlacecast = (phase) => {
    return publishPlacecastThunk(phase)
}
export const publishPlacecastThunk = (phase) => (dispatch) => {
    dispatch(publishPlacecastRequested(phase))
}

export const deletePlacecastSuccess = createAction('DELETE_PLACECAST_SUCCESS')
export const deletePlacecastRequested = createAction('DELETE_PLACECAST_REQUESTED')
export const deletePlacecastFailed = createAction('DELETE_PLACECAST_FAILED')
export const deletePlacecast = (phase) => {
    return deletePlacecastThunk(phase)
}
export const deletePlacecastThunk = (phase) => (dispatch) => {
    dispatch(deletePlacecastRequested(phase))
    dispatch(goToMyDeepMapper())
}


export const populateCreate = createAction('POPULATE_CREATE')


