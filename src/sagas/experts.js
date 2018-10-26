import {call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import {
    becomeAnExpertFailed,
    becomeAnExpertSucceeded,
    fetchExpertsFailed,
    fetchExpertsSucceeded
} from '../actions/experts'
import {validationsTriggered} from '../actions/common'
import {
    getApplicationBio,
    getApplicationEmail,
    getApplicationFirstName, getApplicationLastName,
    getApplicationPassword,
    isReadyToApply
} from '../selectors/apply'
import {goToHomePage} from '../actions/navigation'
import {Scopes} from '../constants/attributes'
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
        const response = yield call(apply, { email, password, bio, firstName, lastName })
        if (response.status === 201) {
            yield put(becomeAnExpertSucceeded(response.data.content))
            yield put(goToHomePage());

        } else {
            yield put(becomeAnExpertFailed(response))
        }
    }
}


