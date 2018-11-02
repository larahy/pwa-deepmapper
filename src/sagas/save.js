import {
    getAudioSrc,
    getPhotoSrc,
    getTitle,
} from '../selectors/create'
import {uploadFailed, uploadSucceeded} from '../actions/s3'
import {postPlacecastSaga, putPlacecastSaga} from './placecasts'
import {call, put, select} from 'redux-saga/effects';
import {isEmpty} from 'lodash';
import {Scopes} from '../constants/attributes'
import {uploadAudio, uploadPhoto, uploadPhotoAndAudio} from './s3'
import {getAudioEdited, getPhotoEdited} from '../selectors/edit'
import {postPlacecastFailed, putPlacecastFailed} from '../actions/placecasts'

export function* savePlacecastSaga(action) {
    const phase = action.payload
    const [ audioEdited, photoEdited, title, photoSrc, audioSrc] = yield [
        select(getAudioEdited),
        select(getPhotoEdited),
        select(getTitle),
        select(getPhotoSrc),
        select(getAudioSrc),
    ]
    const placecast = {title, photoSrc, audioSrc}
    if (phase === Scopes.CREATE && !isEmpty(photoSrc) && !isEmpty(audioSrc)) {
        try {
            const s3Response = yield call(uploadPhotoAndAudio, {placecast});
            yield put({type: uploadSucceeded().type, s3Response});

            yield call(postPlacecastSaga, {...s3Response, publish: false })
        } catch (error) {
            console.log('error', error)
            yield put({type: uploadFailed().type, error});
        }
    } else if (phase === Scopes.CREATE && !isEmpty(audioSrc) && isEmpty(photoSrc)) {
        try {
            const s3Response = yield call(uploadAudio, {placecast});
            yield put({type: uploadSucceeded().type, s3Response});
            yield call(postPlacecastSaga, {...s3Response, publish: false })
        } catch (error) {
            console.log('error', error)
            yield put({type: uploadFailed().type, error});
        }
    } else if (phase === Scopes.CREATE && isEmpty(audioSrc) && !isEmpty(photoSrc)) {
        try {
            const s3Response = yield call(uploadPhoto, {placecast});
            yield put({type: uploadSucceeded().type, s3Response});
            yield call(postPlacecastSaga, {...s3Response, publish: false })
        } catch (error) {
            console.log('error', error)
            yield put({type: uploadFailed().type, error});
        }
    } else if (phase === Scopes.CREATE && isEmpty(audioSrc) && isEmpty(photoSrc)) {
        try {
            yield call(postPlacecastSaga, {publish: false })
        } catch (error) {
            console.log('error', error)
            yield put(postPlacecastFailed(error));
        }
    } else if (phase === Scopes.EDIT && audioEdited && photoEdited) {
        try {
            const s3Response = yield call(uploadPhotoAndAudio, {placecast});
            yield put({type: uploadSucceeded().type, s3Response});

            yield call(putPlacecastSaga, {...s3Response, publish: false })
        } catch (error) {
            console.log('error', error)
            yield put({type: uploadFailed().type, error});
        }
    } else if (phase === Scopes.EDIT && audioEdited && !photoEdited) {
        try {
            const s3Response = yield call(uploadAudio, {placecast});
            yield put({type: uploadSucceeded().type, s3Response});
            yield call(putPlacecastSaga, {...s3Response, publish: false})
        } catch (error) {
            console.log('error', error)
            yield put({type: uploadFailed().type, error});
        }
    } else if (phase === Scopes.EDIT && !audioEdited && photoEdited) {
        try {
            const s3Response = yield call(uploadPhoto, {placecast});
            yield put({type: uploadSucceeded().type, s3Response});
            yield call(putPlacecastSaga, {...s3Response, publish: false })
        } catch (error) {
            console.log('error', error)
            yield put({type: uploadFailed().type, error});
        }
    } else if (phase === Scopes.EDIT && !audioEdited && !photoEdited) {
        try {
            yield call(putPlacecastSaga, { publish: false })
        } catch (error) {
            console.log('error', error)
            yield put(putPlacecastFailed(error));
        }
    }

}
