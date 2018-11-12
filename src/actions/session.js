import { createAction } from 'redux-actions'
import {goToHomePage} from './navigation'

export const loginRequested = createAction('LOGIN_REQUESTED')
export const loginSucceeded = createAction('LOGIN_SUCCEEDED')
export const loginFailed = createAction('LOGIN_FAILED')
// export const logoutRequested = createAction('LOGOUT_REQUESTED')
export const logoutSucceeded = createAction('LOGOUT_SUCCEEDED')


export const logoutThunk = () => (dispatch) => {
    dispatch(loginSucceeded())
    dispatch(goToHomePage())
}