import {createAction} from 'redux-actions'

export const fetchPlacecastsRequested = createAction('FETCH_PLACECASTS_REQUESTED')
export const fetchPlacecastsSucceeded = createAction('FETCH_PLACECASTS_SUCCEEDED')
export const fetchPlacecastsFailed = createAction('FETCH_PLACECASTS_FAILURE')