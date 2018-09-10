import { history } from '../../stores/configureStore.dev'
import {createAction} from 'redux-actions'
import {uploadAudioClipRequested} from '../s3'
export const photoStepCompletedSuccess = createAction('PHOTO_STEP_COMPLETED_SUCCESS')
export const photoSkippedSuccess = createAction('PHOTO_SKIPPED_SUCCESS')
export const photoSelectedSuccess = createAction('PHOTO_SELECTED_SUCCESS')
export const photoSkipped = () => {
    return photoSkippedThunk()
}

export const photoSkippedThunk = () => dispatch => {
    dispatch(photoSkippedSuccess())
    dispatch(history.push('/'))
}

export const photoStepCompleted = (file) => {
    return photoStepCompletedThunk(file)
}

export const photoStepCompletedThunk = (file) => dispatch => {
    dispatch(photoStepCompletedSuccess({file}))
    dispatch(uploadAudioClipRequested({file}))
}

