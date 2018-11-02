import {takeLatest} from 'redux-saga/effects';
import {fetchPlacecastsRequested} from '../actions/placecasts';
import {uploadPhotoRequested} from '../actions/s3';
import {placecastsWorkerSaga} from './placecasts'
import {uploadPhotoSaga} from './s3'
import {loginSaga} from './session'
import {loginRequested} from '../actions/session'
import {fetchDependenciesRequested} from '../actions/dependencies'
import {fetchDependencies} from './dependencies'
import {becomeAnExpertRequested, fetchExpertsRequested, fetchLoggedInExpertRequested} from '../actions/experts'
import {applicationSaga, fetchExpertsSaga, fetchLoggedInExpertSaga} from './experts'
import {publishPlacecastRequested, savePlacecastRequested} from '../actions/create2'
import {publishPlacecastSaga} from './publish'
import {savePlacecastSaga} from './save'

export function* watcherSaga() {
    yield takeLatest(fetchPlacecastsRequested, placecastsWorkerSaga);
    yield takeLatest(fetchExpertsRequested, fetchExpertsSaga);
    yield takeLatest(loginRequested, loginSaga);
    yield takeLatest(fetchLoggedInExpertRequested, fetchLoggedInExpertSaga);
    yield takeLatest(fetchDependenciesRequested, fetchDependencies);
    yield takeLatest(becomeAnExpertRequested, applicationSaga);
    yield takeLatest(uploadPhotoRequested, uploadPhotoSaga);
    yield takeLatest(publishPlacecastRequested, publishPlacecastSaga);
    yield takeLatest(savePlacecastRequested, savePlacecastSaga);

}