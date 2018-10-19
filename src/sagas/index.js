import {takeLatest} from 'redux-saga/effects';
import {fetchPlacecastsRequested} from '../actions/placecasts';
import {fetchBucketContentsRequested, uploadRequested} from '../actions/s3';
import {placecastsWorkerSaga} from './placecasts'
import {s3WorkerSaga} from './s3'
import {uploadSaga} from './create'
import {loginSaga} from './session'
import {loginRequested} from '../actions/user/session'
import {fetchLoggedInUserRequested} from '../actions/user/user'
import {fetchLoggedInUser} from './user'

export function* watcherSaga() {
    yield takeLatest(fetchPlacecastsRequested, placecastsWorkerSaga);
    yield takeLatest(fetchBucketContentsRequested, s3WorkerSaga);
    yield takeLatest(uploadRequested, uploadSaga);
    yield takeLatest(loginRequested, loginSaga);
    yield takeLatest(fetchLoggedInUserRequested, fetchLoggedInUser);

}