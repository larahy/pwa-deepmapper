import createAction from 'redux-actions/es/createAction'
import {goToEditPlacecastPage, goToMyDeepMapper} from './navigation'
import {populateCreate} from './create2'

export const updateIsEditing = createAction('UPDATE_IS_EDITING')
export const populateEdit = createAction('POPULATE_EDIT')
export const editPlacecast = ({placecast}) => {

    return editPlacecastThunk(placecast)
}
export const editPlacecastThunk = (placecast) => (dispatch) => {
    dispatch(populateEdit(placecast))
    dispatch(populateCreate(placecast))
    dispatch(goToEditPlacecastPage())
}
//PHOTO //
export const editPhoto = createAction('EDIT_PHOTO')
export const updateIsEditingPhoto = createAction('UPDATE_IS_EDITING_PHOTO')

export const editUploadPhotoFile = (file) => {
    return editUploadPhotoFileThunk(file)
}
export const editUploadPhotoFileThunk = (file) => (dispatch) => {
    dispatch(editPhoto(file))
    // dispatch(uploadPhotoFileSuccess(file))
}
export const cancelPhotoEdit = createAction('CANCEL_PHOTO_EDIT')
//MAP && STREET VIEW//
export const editAddress = createAction('EDIT_ADDRESS')

export const saveNewAddress = createAction('SAVE_NEW_ADDRESS')
export const updatePlacecastCoordinates = createAction('UPDATE_PLACECAST_COORDINATES')

//AUDIO//
export const cancelAudioEdit = createAction('CANCEL_AUDIO_EDIT')
export const updateIsEditingAudio = createAction('UPDATE_IS_EDITING_AUDIO')
export const editAudio = createAction('EDIT_AUDIO')
export const saveNewAudio = createAction('SAVE_NEW_AUDIO')

export const editAudioRecording = (file) => {
    return editAudioRecordingThunk(file)
}
export const editAudioRecordingThunk = (file) => (dispatch) => {
    dispatch(editAudio(file))
    // dispatch(saveNewAudio(file))
}


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


