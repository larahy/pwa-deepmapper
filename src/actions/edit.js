import createAction from 'redux-actions/es/createAction'
import { goToEditPlacecastPage} from './navigation'

export const updateIsEditing = createAction('UPDATE_IS_EDITING')
export const populateEdit = createAction('POPULATE_EDIT')
export const editPlacecast = ({placecast}) => {

    return editPlacecastThunk(placecast)
}
export const editPlacecastThunk = (placecast) => (dispatch) => {
    dispatch(populateEdit(placecast))
    dispatch(goToEditPlacecastPage())
}
//PHOTO //
export const editUploadPhotoFileSuccess = createAction('EDIT_UPLOAD_PHOTO_FILE_SUCCESS')

export const editUploadPhotoFile = (file) => {
    return editUploadPhotoFileThunk(file)
}
export const editUploadPhotoFileThunk = (file) => (dispatch) => {
    dispatch(editUploadPhotoFileSuccess(file))
}
export const cancelPhotoEdit = createAction('CANCEL_PHOTO_EDIT')
//MAP && STREET VIEW//
export const editAddress = createAction('EDIT_ADDRESS')

export const cancelMapEdit = createAction('CANCEL_MAP_EDIT')
export const saveNewAddress = createAction('SAVE_NEW_ADDRESS')
export const updatePlacecastCoordinates = createAction('UPDATE_PLACECAST_COORDINATES')

//AUDIO//
export const cancelAudioEdit = createAction('CANCEL_AUDIO_EDIT')
export const updateIsEditingAudio = createAction('UPDATE_IS_EDITING_AUDIO')
export const editAudio = createAction('EDIT_AUDIO')
export const saveNewAudio = createAction('SAVE_NEW_AUDIO')


