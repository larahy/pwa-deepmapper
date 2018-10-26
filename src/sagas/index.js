import {takeLatest} from 'redux-saga/effects';
import {fetchPlacecastsRequested} from '../actions/placecasts';
import {fetchBucketContentsRequested, uploadRequested} from '../actions/s3';
import {placecastsWorkerSaga} from './placecasts'
import {s3WorkerSaga} from './s3'
import {uploadSaga} from './create'
import {loginSaga} from './session'
import {loginRequested} from '../actions/session'
import {fetchDependenciesRequested} from '../actions/dependencies'
import {fetchDependencies} from './dependencies'
import {becomeAnExpertRequested, fetchExpertsRequested, fetchLoggedInExpertRequested} from '../actions/experts'
import {applicationSaga, fetchExpertsSaga, fetchLoggedInExpertSaga} from './experts'

export function* watcherSaga() {
    yield takeLatest(fetchPlacecastsRequested, placecastsWorkerSaga);
    yield takeLatest(fetchExpertsRequested, fetchExpertsSaga);
    yield takeLatest(fetchBucketContentsRequested, s3WorkerSaga);
    yield takeLatest(uploadRequested, uploadSaga);
    yield takeLatest(loginRequested, loginSaga);
    yield takeLatest(fetchLoggedInExpertRequested, fetchLoggedInExpertSaga);
    yield takeLatest(fetchDependenciesRequested, fetchDependencies);
    yield takeLatest(becomeAnExpertRequested, applicationSaga);

}