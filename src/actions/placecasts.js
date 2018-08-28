import {createAction} from 'redux-actions'

export const fetchPlacecastsRequested = createAction('FETCH_PLACECASTS_REQUESTED')
export const fetchPlacecastsSucceeded = createAction('FETCH_PLACECASTS_SUCCEEDED')
export const fetchPlacecastsFailed = createAction('FETCH_PLACECASTS_FAILURE')
export const openStreetViewModal = createAction('OPEN_STREET_VIEW_MODAL')
export const closeStreetViewModal = createAction('CLOSE_STREET_VIEW_MODAL')
