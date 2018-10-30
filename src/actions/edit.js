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