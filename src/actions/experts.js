import createAction from 'redux-actions/es/createAction'

export const fetchExpertsRequested = createAction('FETCH_EXPERTS_REQUESTED')
export const fetchExpertsSucceeded = createAction('FETCH_EXPERTS_SUCCEEDED')
export const fetchExpertsFailed = createAction('FETCH_EXPERTS_FAILURE')