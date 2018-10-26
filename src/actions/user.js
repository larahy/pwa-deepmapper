import { createAction } from 'redux-actions'

export const fetchLoggedInExpertRequested = createAction('FETCH_LOGGED_IN_EXPERT_REQUESTED')
export const fetchLoggedInExpertSucceeded = createAction('FETCH_LOGGED_IN_EXPERT_SUCCEEDED')
export const fetchLoggedInExpertFailed = createAction('FETCH_LOGGED_IN_EXPERT_FAILED')

export const becomeADeepmapperRequested = createAction('BECOME_A_DEEPMAPPER_REQUESTED')
export const becomeADeepmapperSucceeded = createAction('BECOME_A_DEEPMAPPER_SUCCEEDED')
export const becomeADeepmapperFailed = createAction('BECOME_A_DEEPMAPPER_FAILED')
