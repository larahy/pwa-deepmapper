import { history } from '../../stores/configureStore.dev'
import {createAction} from 'redux-actions'
export const photoSkippedSuccess = createAction('PHOTO_SKIPPED_SUCCESS')

export const photoSkipped = () => {
    return photoSkippedThunk()
}
export const photoSkippedThunk = () => dispatch => {
    dispatch(photoSkippedSuccess())
    dispatch(history.push('/'))
}

export const photoStepCompletedSuccess = createAction('PHOTO_STEP_COMPLETED_SUCCESS')
export const photoStepCompleted = () => {
    return photoStepCompletedThunk()
}
export const photoStepCompletedThunk = () => dispatch => {
    dispatch(history.push('/'))
}

