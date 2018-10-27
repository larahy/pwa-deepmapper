import {takeLatest} from 'redux-saga/effects';
import {fetchPlacecastsRequested} from '../actions/placecasts';
import {uploadRequested} from '../actions/s3';
import {placecastsWorkerSaga} from './placecasts'
import {uploadSaga} from './s3'
import {loginSaga} from './session'
import {loginRequested} from '../actions/session'
import {fetchDependenciesRequested} from '../actions/dependencies'
import {fetchDependencies} from './dependencies'
import {becomeAnExpertRequested, fetchExpertsRequested, fetchLoggedInExpertRequested} from '../actions/experts'
import {applicationSaga, fetchExpertsSaga, fetchLoggedInExpertSaga} from './experts'

export function* watcherSaga() {
    yield takeLatest(fetchPlacecastsRequested, placecastsWorkerSaga);
    yield takeLatest(fetchExpertsRequested, fetchExpertsSaga);
    yield takeLatest(uploadRequested, uploadSaga);
    yield takeLatest(loginRequested, loginSaga);
    yield takeLatest(fetchLoggedInExpertRequested, fetchLoggedInExpertSaga);
    yield takeLatest(fetchDependenciesRequested, fetchDependencies);
    yield takeLatest(becomeAnExpertRequested, applicationSaga);

}