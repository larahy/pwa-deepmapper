import { createAction } from 'redux-actions'

export const fetchLoggedInUserRequested = createAction('FETCH_LOGGED_IN_USER_REQUESTED')
export const fetchLoggedInUserSucceeded = createAction('FETCH_LOGGED_IN_USER_SUCCEEDED')
export const fetchLoggedInUserFailed = createAction('FETCH_LOGGED_IN_USER_FAILED')
