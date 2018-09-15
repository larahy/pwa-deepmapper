/* eslint-disable */
import { push } from 'react-router-redux'
import {createAction} from 'redux-actions'
import {includes, every, filter} from 'lodash'
import {AttributeScopes, Validity, Tags} from '../../constants/attributes'
import {uploadRequested} from '../s3'
import {validationsTriggered} from '../common'

export const photoSelectedSuccess = createAction('PHOTO_SELECTED_SUCCESS')
export const photoSkippedSuccess = createAction('PHOTO_SKIPPED_SUCCESS')
export const photoSkipped = () => {
    return photoSkippedThunk()
}
export const photoSkippedThunk = () => dispatch => {
    dispatch(photoSkippedSuccess())
    dispatch(push('/create/audio'))
}

export const photoStepCompletedSuccess = createAction('PHOTO_STEP_COMPLETED_SUCCESS')
export const photoStepCompleted = (file, title) => {
    return photoStepCompletedThunk(file, title)
}

export const photoStepCompletedThunk = (file, title) => dispatch => {
    dispatch(uploadRequested({file, title}))
    dispatch(push('/create/audio'))
}

export const infoStepCompletedSuccess = createAction('INFO_STEP_COMPLETED_SUCCESS')
export const infoStepCompleted = () =>  {
    return infoStepCompletedThunk()
}
export const infoStepCompletedThunk = () => (dispatch) => {
    dispatch(infoStepCompletedSuccess())
    dispatch(push('/create/photo'))
    // return proceedOrValidateFor(Tags.INFO, '/create/photo', getState(), dispatch, infoStepCompletedSuccess)
}

export const audioSkippedSuccess = createAction('AUDIO_SKIPPED_SUCCESS')
export const audioSkipped = () => {
    return audioSkippedThunk()
}
export const audioSkippedThunk = () => dispatch => {
    dispatch(audioSkippedSuccess())
    dispatch(push('/create/street-view'))
}

const proceedOrValidateFor = (tag, nextLocation, state, dispatch, actionCreator) => {
    const attributes = state.create.attributes
    const currentAttributes = filter(attributes, attribute => {
        return includes(attribute.tags, tag)
    })
    const allowedValidities = [Validity.VALID, Validity.NOT_APPLICABLE]
    const readyToProceed = every(currentAttributes, attribute => {
        return includes(allowedValidities, attribute.validity)
    })

    if (readyToProceed) {
        dispatch(actionCreator())
        dispatch(push(nextLocation))
    } else {
        dispatch(validationsTriggered({
            scope: AttributeScopes.CREATE,
            tags: [tag]
        }))
    }
}


