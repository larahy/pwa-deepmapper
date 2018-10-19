import { call, select, put } from 'redux-saga/effects'
import {getLoggedInUserId, getToken, isLoggedIn} from '../selectors/session'
import axios from 'axios'
import { push } from 'react-router-redux'
import {fetchLoggedInUserFailed, fetchLoggedInUserSucceeded} from '../actions/user'
import {logoutSucceeded} from '../actions/session'

/* eslint-disable no-undef */
const apiUrl = API_URL
/* eslint-disable no-undef */

function fetchUser({userId, token}) {
    console.log('fetching user via api ', userId, token)
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
            yield put(fetchLoggedInUserSucceeded({ response: response.data.content}))
        } else if (response.statusCode === 401) {
            yield put(fetchLoggedInUserFailed())
            yield put(logoutSucceeded())
            yield put(push('/login'))
        } else {
            yield put(fetchLoggedInUserFailed())
            yield put(push('/'))
        }
    }
}




