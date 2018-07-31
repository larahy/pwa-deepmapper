import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    console.log('watching')
    yield takeLatest('API_CALL_REQUEST', workerSaga);
    yield takeLatest('PLACECASTS_REQUEST', placecastsWorkerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
    return axios({
        method: 'get',
        url: 'https://dog.ceo/api/breeds/image/random'
    });
}

function fetchPlacecasts() {
    return axios({
        method: 'get',
        url: 'https://vast-lake-13671.herokuapp.com/api/v1/placecasts'
    });
}

function* placecastsWorkerSaga() {
    try {
        const response = yield call(fetchPlacecasts);
        const placecasts = response.data.content._embedded.placecasts;

        // dispatch a success action to the store with the new dog
        yield put({type: 'PLACECASTS_SUCCESS', placecasts});

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({type: 'PLACECASTS_FAILURE', error});
    }
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchDog);
        const dog = response.data.message;

        // dispatch a success action to the store with the new dog
        yield put({type: 'API_CALL_SUCCESS', dog});

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({type: 'API_CALL_FAILURE', error});
    }
}