import { push } from 'react-router-redux'
import {updateCurrentViewTo} from './placecasts'

export const goToHomePage = () => push('/')
export const goToCreatePhotoPage = () => push('/create/photo')
export const goToCreateAudioPage = () => push('/create/audio')
export const goToCreateStreetViewPage = () => push('/create/street-view')
export const goToCreateMapPage = () => push('/create/map')
export const goToCreateReviewPage = () => push('/create/review')

export const goToHomePageThunk = () => (dispatch) => {
    dispatch(updateCurrentViewTo('photo'))
    dispatch(goToHomePage())
}
