import { call, put, select } from 'redux-saga/effects'
/* eslint-disable no-undef */
const apiUrl = API_URL
/* eslint-disable no-undef */
import {
    loginSucceeded,
    loginFailed
} from '../actions/user/session'
import {
    validationsTriggered
} from '../actions/common'
import { Scopes } from '../constants/attributes'
import {getLoginEmail, getLoginPassword, isReadyToLogin} from '../selectors/login'
import axios from 'axios'
import {push} from 'react-router-redux'
import {fetchLoggedInUser} from './user'


function login({email, password}) {
    return axios.post(`${apiUrl}/api/v1/session`, {
        'email': email,
        'password': password
    })

}


export function* loginSaga () {
    yield put(validationsTriggered({ scope: Scopes.LOGIN }))

    const readyToProceed = yield select(isReadyToLogin)
    if (readyToProceed) {
        const [ email, password ] = yield [
            select(getLoginEmail),
            select(getLoginPassword)
        ]
        const response = yield call(login, { email, password })
        if (response.status === 200) {
            yield put(loginSucceeded(response.data.content))
            yield call(fetchLoggedInUser)
            yield put(push('/'))
            // yield put(push('/my-profile'));

        } else {
            yield put(loginFailed(response))
        }
    }
}


