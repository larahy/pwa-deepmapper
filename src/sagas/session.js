/* eslint-disable  */
import { call, put, select } from 'redux-saga/effects'
/* eslint-disable no-undef */
const apiUrl = API_URL
/* eslint-disable no-undef */
import {
    loginSucceeded,
    loginFailed
} from '../actions/session'
import {
    validationsTriggered
} from '../actions/common'
import { Scopes } from '../constants/attributes'
import {getLoginEmail, getLoginPassword, isReadyToLogin} from '../selectors/login'
import axios from 'axios'
import {fetchLoggedInExpertSaga} from './experts'
import {goToMyDeepMapper} from '../actions/navigation'
import {addError} from '../actions/Errors'

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
        try {
            const response = yield call(login, { email, password })
            yield put(loginSucceeded(response.data.content))
            yield call(fetchLoggedInExpertSaga)
            yield put(goToMyDeepMapper());

        } catch (error) {
            yield put(loginFailed())
            yield put(addError(error.response.data.code));
        }

    }
}


