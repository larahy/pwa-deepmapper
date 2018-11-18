import { push } from 'react-router-redux'
import {updateCurrentViewTo} from './placecasts'
import {deletePlacecastSuccess} from './edit'
import {removeError} from './Errors'

export const goToHomePage = () => (dispatch) => {
    dispatch(removeError())
    dispatch(push('/'))
}
export const goToCreatePage = () => (dispatch) => {
    dispatch(removeError())
    dispatch(push('/create'))
}

export const goToCreatePhotoPage = () => push('/create/photo')
export const goToCreateAudioPage = () => push('/create/audio')
export const goToCreateStreetViewPage = () => push('/create/street-view')
export const goToCreateMapPage = () => push('/create/map')
export const goToCreateReviewPage = () => push('/create/review')
export const goToLogin = () => (dispatch) => {
    dispatch(removeError())
    dispatch(push('/login'))
}
export const goToMyDeepMapper = () => (dispatch) => {
    dispatch(removeError())
    dispatch(push('/my-deepmapper'))
}
export const goToEditPlacecastPage = () => push('/edit-placecast')

export const goToPlacecastPage = ({id}) => {
    return push(`/placecasts/${id}`)
}

export const goToHomePageThunk = () => (dispatch) => {
    dispatch(updateCurrentViewTo('photo'))
    dispatch(goToHomePage())
}

export const goToMyDeepMapperThunk = () => (dispatch) => {
    dispatch(deletePlacecastSuccess())
    dispatch(goToMyDeepMapper())
}

export const goToCreateThunk = () => (dispatch) => {
    dispatch(deletePlacecastSuccess())
    dispatch(goToCreatePage())
}
