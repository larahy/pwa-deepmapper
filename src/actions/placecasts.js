import {createAction} from 'redux-actions'

export const fetchPlacecastsRequested = createAction('FETCH_PLACECASTS_REQUESTED')
export const fetchPlacecastsSucceeded = createAction('FETCH_PLACECASTS_SUCCEEDED')
export const fetchPlacecastsFailed = createAction('FETCH_PLACECASTS_FAILURE')
export const postPlacecastRequested = createAction('POST_PLACECAST_REQUESTED')
export const postPlacecastSucceeded = createAction('POST_PLACECAST_SUCCEEDED')
export const postPlacecastFailed = createAction('POST_PLACECAST_FAILURE')
export const putPlacecastRequested = createAction('PUT_PLACECAST_REQUESTED')
export const putPlacecastSucceeded = createAction('PUT_PLACECAST_SUCCEEDED')
export const putPlacecastFailed = createAction('PUT_PLACECAST_FAILURE')
export const updateCurrentViewTo = createAction('UPDATE_CURRENT_VIEW_TO')
export const updateHomepageCurrentFeedViewTo = createAction('UPDATE_HOMEPAGE_CURRENT_FEED_VIEW_TO')

