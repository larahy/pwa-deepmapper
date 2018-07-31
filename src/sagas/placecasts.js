import {call, put} from 'redux-saga/effects';
import axios from 'axios';
import {
    fetchPlacecastsSucceeded,
    fetchPlacecastsFailed
} from '../actions/placecasts'


function fetchPlacecasts() {
    return axios({
        method: 'get',
        url: 'https://vast-lake-13671.herokuapp.com/api/v1/placecasts'
    });
}

export default function* placecastsWorkerSaga() {
    try {
        const response = yield call(fetchPlacecasts);
        const placecasts = response.data.content._embedded.placecasts;

        // dispatch a success action to the store with the new dog
        yield put({type: fetchPlacecastsSucceeded().type, placecasts});

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({type: fetchPlacecastsFailed().type, error});
    }
}