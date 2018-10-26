import { createAction } from 'redux-actions'

export const fetchLoggedInUserRequested = createAction('FETCH_LOGGED_IN_USER_REQUESTED')
export const fetchLoggedInUserSucceeded = createAction('FETCH_LOGGED_IN_USER_SUCCEEDED')
export const fetchLoggedInUserFailed = createAction('FETCH_LOGGED_IN_USER_FAILED')

export const becomeADeepmapperRequested = createAction('BECOME_A_DEEPMAPPER_REQUESTED')
export const becomeADeepmapperSucceeded = createAction('BECOME_A_DEEPMAPPER_SUCCEEDED')
export const becomeADeepmapperFailed = createAction('BECOME_A_DEEPMAPPER_FAILED')
