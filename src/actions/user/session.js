import { createAction } from 'redux-actions'

export const loginRequested = createAction('LOGIN_REQUESTED')
export const loginSucceeded = createAction('LOGIN_SUCCEEDED')
export const loginFailed = createAction('LOGIN_FAILED')
export const logoutRequested = createAction('LOGOUT_REQUESTED')
export const logoutSucceeded = createAction('LOGOUT_SUCCEEDED')
