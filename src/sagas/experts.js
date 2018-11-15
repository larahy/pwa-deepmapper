/* eslint-disable  */

import {call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import {
    becomeAnExpertFailed,
    becomeAnExpertSucceeded,
    fetchExpertsFailed,
    fetchExpertsSucceeded, fetchLoggedInExpertFailed, fetchLoggedInExpertSucceeded
} from '../actions/experts'
import {validationsTriggered} from '../actions/common'
import {
    getApplicationBio,
    getApplicationEmail,
    getApplicationFirstName, getApplicationLastName,
    getApplicationPassword,
    isReadyToApply
} from '../selectors/apply'
import {goToHomePage, goToLogin} from '../actions/navigation'
import {Scopes} from '../constants/attributes'
import {getLoggedInUserId, getToken, isLoggedIn} from '../selectors/session'
import {logoutSucceeded} from '../actions/session'
import {addError} from '../actions/Errors'
/* eslint-disable no-undef */
const apiUrl = API_URL
/* eslint-disable no-undef */

function fetchExperts() {
    return axios({
        method: 'get',
        url: `${apiUrl}/api/v1/users`
    });
}

export function* fetchExpertsSaga() {
    try {
        const response = yield call(fetchExperts);
        const experts = response.data.content._embedded.users;
        yield put({type: fetchExpertsSucceeded().type, experts});
    } catch (error) {
        yield put({type: fetchExpertsFailed().type, error});
    }
}

function apply({email, password, bio, firstName, lastName}) {
    return axios.post(`${apiUrl}/api/v1/users`, {
        'email': email,
        'password': password,
        'first_name' : firstName,
        'last_name' : lastName,
        'bio': bio
    })

}


export function* applicationSaga () {
    yield put(validationsTriggered({ scope: Scopes.APPLICATION }))

    const readyToProceed = yield select(isReadyToApply)
    if (readyToProceed) {
        const [ email, password, bio, firstName, lastName ] = yield [
            select(getApplicationEmail),
            select(getApplicationPassword),
            select(getApplicationBio),
            select(getApplicationFirstName),
            select(getApplicationLastName)
        ]
        try {
            const response = yield call(apply, { email, password, bio, firstName, lastName })
            if (response.status === 201) {
                yield put(becomeAnExpertSucceeded(response.data.content))
                yield put(goToHomePage());
            }
        }
        catch(error) {
            yield put(becomeAnExpertFailed())
            yield put(addError(error.response.data.content.message))
        }

    }
}

function fetchLoggedInExpert({userId, token}) {
    return axios({
        method: 'get',
        url: `${apiUrl}/api/v1/users/${userId}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Token': token
        },
    });

}

export function* fetchLoggedInExpertSaga () {
    if (yield select(isLoggedIn)) {
        const [ userId, token ] = yield [
            select(getLoggedInUserId),
            select(getToken),
        ]

        const response = yield call(fetchLoggedInExpert, { userId, token })

        if (response.status === 200) {
            yield put(fetchLoggedInExpertSucceeded({ response: response.data.content}))
        } else if (response.statusCode === 401) {
            yield put(fetchLoggedInExpertFailed())
            yield put(logoutSucceeded())
            yield put(goToLogin())
        } else {
            yield put(fetchLoggedInExpertFailed())
            yield put(goToHomePage())
        }
    }
}


