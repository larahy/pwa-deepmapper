import {takeLatest} from 'redux-saga/effects';
import {fetchPlacecastsRequested} from '../actions/placecasts';
import {fetchBucketContentsRequested, uploadAudioClipRequested} from '../actions/s3';
import placecastsWorkerSaga from './placecasts'
import {s3WorkerSaga, AudioUploadSaga} from './s3'


export function* watcherSaga() {
    yield takeLatest(fetchPlacecastsRequested, placecastsWorkerSaga);
    yield takeLatest(fetchBucketContentsRequested, s3WorkerSaga);
    yield takeLatest(uploadAudioClipRequested, AudioUploadSaga);

}