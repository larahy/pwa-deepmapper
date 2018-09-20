/* eslint-disable */
import {push} from 'react-router-redux'
import {createAction} from 'redux-actions'
import {includes, every, filter, words, snakeCase} from 'lodash'
import {AttributeScopes, Validity, Tags} from '../../constants/attributes'
import {uploadRequested} from '../s3'
import {validationsTriggered} from '../common'

//STEP 1 INFO //
export const infoStepCompletedSuccess = createAction('INFO_STEP_COMPLETED_SUCCESS')
export const infoStepCompleted = () => {
    return infoStepCompletedThunk()
}
export const infoStepCompletedThunk = () => (dispatch) => {
    dispatch(infoStepCompletedSuccess())
    dispatch(push('/create/photo'))
    // return proceedOrValidateFor(Tags.INFO, '/create/photo', getState(), dispatch, infoStepCompletedSuccess)
}

//STEP 2 PHOTO //

export const photoSelectedSuccess = createAction('PHOTO_SELECTED_SUCCESS')

//SKIP//
export const photoSkippedSuccess = createAction('PHOTO_SKIPPED_SUCCESS')
export const photoSkipped = () => {
    return photoSkippedThunk()
}
export const photoSkippedThunk = () => dispatch => {
    dispatch(photoSkippedSuccess())
    dispatch(push('/create/audio'))
}
//COMPLETE STEP//
export const photoStepCompletedSuccess = createAction('PHOTO_STEP_COMPLETED_SUCCESS')
export const photoStepCompleted = (file, title) => {
    const newTitle = appendFileType(file, title)
    return photoStepCompletedThunk(file, newTitle)
}

export const photoStepCompletedThunk = (file, title) => dispatch => {
    dispatch(uploadRequested({file, title}))
}

//STEP 3 AUDIO //

//SKIP//
export const audioSkippedSuccess = createAction('AUDIO_SKIPPED_SUCCESS')
export const audioSkipped = () => {
    return audioSkippedThunk()
}
export const audioSkippedThunk = () => dispatch => {
    dispatch(audioSkippedSuccess())
    dispatch(push('/create/street-view'))
}
//COMPLETE STEP//
export const audioStepCompletedSuccess = createAction('AUDIO_STEP_COMPLETED_SUCCESS')
export const audioStepCompleted = (file, title) => {
    const newTitle = appendFileType(file, title)
    return audioStepCompletedThunk(file, newTitle)
}
export const audioStepCompletedThunk = (file, title) => (dispatch) => {
    dispatch(uploadRequested({file, title}))
}

//STEP 4 STREET-VIEW //
export const selectPlacecastAddress = createAction('SELECT_PLACECAST_ADDRESS')
export const updatePlacecastCoordinates = createAction('UPDATE_PLACECAST_COORDINATES')
export const addPlacecastPOV = createAction('ADD_PLACECAST_POV')
//SKIP//
export const streetViewSkippedSuccess = createAction('STREET_VIEW_SKIPPED_SUCCESS')
export const streetViewSkipped = () => {
    return streetViewSkippedThunk()
}
export const streetViewSkippedThunk = () => dispatch => {
    dispatch(streetViewSkippedSuccess())
    dispatch(push('/create/review'))
}
//COMPLETE STEP//
export const streetViewStepCompletedSuccess = createAction('STREET_VIEW_STEP_COMPLETED_SUCCESS')
export const streetViewStepCompleted = (options) => {
    return streetViewStepCompletedThunk(options)
}
export const streetViewStepCompletedThunk = (options) => (dispatch) => {
    dispatch(streetViewStepCompletedSuccess({options}))
    dispatch(push('/create/review'))
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

const appendFileType = (file, title) => {
    const fileType = words(file.type, '[^\\/]+$')
    return `${snakeCase(title)}.${fileType[0]}`
}


