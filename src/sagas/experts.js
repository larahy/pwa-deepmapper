import {call, put} from 'redux-saga/effects';
import axios from 'axios';
import {fetchExpertsFailed, fetchExpertsSucceeded} from '../actions/experts'
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