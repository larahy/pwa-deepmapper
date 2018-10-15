import {createAction} from 'redux-actions'

export const fetchPlacecastsRequested = createAction('FETCH_PLACECASTS_REQUESTED')
export const fetchPlacecastsSucceeded = createAction('FETCH_PLACECASTS_SUCCEEDED')
export const fetchPlacecastsFailed = createAction('FETCH_PLACECASTS_FAILURE')
export const postPlacecastRequested = createAction('POST_PLACECAST_REQUESTED')
export const postPlacecastSucceeded = createAction('POST_PLACECAST_SUCCEEDED')
export const postPlacecastFailed = createAction('POST_PLACECAST_FAILURE')
export const openStreetViewModal = createAction('OPEN_STREET_VIEW_MODAL')
export const closeStreetViewModal = createAction('CLOSE_STREET_VIEW_MODAL')
export const updateCurrentViewTo = createAction('UPDATE_CURRENT_VIEW_TO')
