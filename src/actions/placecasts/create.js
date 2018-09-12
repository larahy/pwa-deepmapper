import { history } from '../../stores/configureStore.dev'
import {createAction} from 'redux-actions'
import {includes, every} from 'lodash'
import {AttributeScopes, Validity} from '../../constants/attributes'
import {uploadRequested} from '../s3'
import {validationsTriggered} from '../common'


export const photoStepCompletedSuccess = createAction('PHOTO_STEP_COMPLETED_SUCCESS')
export const photoSkippedSuccess = createAction('PHOTO_SKIPPED_SUCCESS')
export const photoSelectedSuccess = createAction('PHOTO_SELECTED_SUCCESS')


export const photoSkipped = () => {
    return photoSkippedThunk()
}

export const photoSkippedThunk = () => dispatch => {
    dispatch(photoSkippedSuccess())
    dispatch(history.push('/create/audio'))
}

export const photoStepCompleted = (file) => {
    return photoStepCompletedThunk(file)
}

export const photoStepCompletedThunk = (file) => dispatch => {
    dispatch(photoStepCompletedSuccess({file}))
    dispatch(uploadRequested({file}))
}

export const infoStepCompletedSuccess = createAction('INFO_STEP_COMPLETED_SUCCESS')
export const infoStepCompleted = () =>  {
    return infoStepCompletedThunk()
}
export const infoStepCompletedThunk = () => (dispatch, getState) => {
    return proceedOrValidateFor('/create/photo', getState(), dispatch, infoStepCompletedSuccess)
}

const proceedOrValidateFor = (nextLocation, state, dispatch, actionCreator) => {
    const attributes = state.create.attributes
    const allowedValidities = [Validity.VALID, Validity.NOT_APPLICABLE]
    const readyToProceed = every(attributes, attribute => {
        return includes(allowedValidities, attribute.validity)
    })

    if (readyToProceed) {
        dispatch(actionCreator())
        dispatch(history.push(nextLocation))
    } else {
        dispatch(validationsTriggered({
            scope: AttributeScopes.CREATE,
        }))
    }
}


