import { call, select, put } from 'redux-saga/effects'
import {getLoggedInUserId, getToken, isLoggedIn} from '../selectors/session'
import axios from 'axios'
import { push } from 'react-router-redux'
import {logoutSucceeded} from '../actions/session'
import {fetchLoggedInExpertFailed, fetchLoggedInExpertSucceeded} from '../actions/experts'

/* eslint-disable no-undef */
const apiUrl = API_URL
/* eslint-disable no-undef */

function fetchUser({userId, token}) {
    return axios({
        method: 'get',
        url: `${apiUrl}/api/v1/users/${userId}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Token': token
        },
    });

}
export function* fetchLoggedInUser () {
    if (yield select(isLoggedIn)) {
        const [ userId, token ] = yield [
            select(getLoggedInUserId),
            select(getToken),
        ]

        const response = yield call(fetchUser, { userId, token })

        if (response.status === 200) {
            yield put(fetchLoggedInExpertSucceeded({ response: response.data.content}))
        } else if (response.statusCode === 401) {
            yield put(fetchLoggedInExpertFailed())
            yield put(logoutSucceeded())
            yield put(push('/login'))
        } else {
            yield put(fetchLoggedInExpertFailed())
            yield put(push('/'))
        }
    }
}




