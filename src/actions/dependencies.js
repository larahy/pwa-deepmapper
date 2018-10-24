import {createAction} from 'redux-actions'

export const fetchDependenciesRequested = createAction('FETCH_DEPENDENCIES_REQUESTED')
export const fetchDependenciesSucceeded = createAction('FETCH_DEPENDENCIES_SUCCEEDED')
export const fetchDependenciesFailed = createAction('FETCH_DEPENDENCIES_FAILED')
