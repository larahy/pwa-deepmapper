import createAction from 'redux-actions/es/createAction'
import {goToEditPlacecastPage} from './navigation'

export const populateEdit = createAction('POPULATE_EDIT')

export const editPlacecast = ({placecast}) => {
    return editPlacecastThunk(placecast)
}
export const editPlacecastThunk = (placecast) => (dispatch) => {
    dispatch(populateEdit(placecast))
    dispatch(goToEditPlacecastPage())
}

//PHOTO //
export const selectPhotoSuccess = createAction('SELECT_PHOTO_SUCCESS')
export const selectPhoto = (file) => {
    return selectPhotoThunk(file)
}
export const selectPhotoThunk = (file) => (dispatch) => {
    dispatch(selectPhotoSuccess(file))
    // return proceedOrValidateFor(Tags.INFO, '/create/photo', getState(), dispatch, infoStepCompletedSuccess)
}

export const updateIsEditing = createAction('UPDATE_IS_EDITING')
