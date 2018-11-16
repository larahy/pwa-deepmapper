import {
    getTitle,
} from '../selectors/create'
import {uploadSucceeded} from '../actions/s3'
import {postPlacecastSaga, putPlacecastSaga} from './placecasts'
import {call, put, select} from 'redux-saga/effects';
import {Scopes} from '../constants/attributes'
import {uploadAudio, uploadPhoto, uploadPhotoAndAudio} from './s3'
import {getAudioEdited, getNewAudioSrc, getNewPhotoSrc, getPhotoEdited} from '../selectors/edit'
import {putPlacecastFailed} from '../actions/placecasts'
import {addError} from '../actions/Errors'

export function* publishPlacecastSaga(action) {
    const phase = action.payload
    const [ audioEdited, photoEdited, title, newAudioSrc, newPhotoSrc] = yield [
        select(getAudioEdited),
        select(getPhotoEdited),
        select(getTitle),
        select(getNewAudioSrc),
        select(getNewPhotoSrc),
    ]
    if (phase === Scopes.CREATE && photoEdited && audioEdited) {
        try {
            const s3Response = yield call(uploadPhotoAndAudio, {title, newPhotoSrc, newAudioSrc});
            yield put(uploadSucceeded(s3Response))

            yield call(postPlacecastSaga, {...s3Response, publish: true })
        } catch (error) {
            console.log('error', error.response)
            yield put(addError(error.response))
        }
    } else if (phase === Scopes.EDIT && audioEdited && photoEdited) {

        try {
            const s3Response = yield call(uploadPhotoAndAudio, {title, newPhotoSrc, newAudioSrc});
            yield put(uploadSucceeded(s3Response))

            yield call(putPlacecastSaga, {...s3Response, publish: true })
        } catch (error) {
            console.log('error', error)
            yield put(addError(error.response))
        }
    } else if (phase === Scopes.EDIT && audioEdited && !photoEdited) {
        try {
            const s3Response = yield call(uploadAudio, {title, newAudioSrc});
            yield put(uploadSucceeded(s3Response))
            yield call(putPlacecastSaga, {...s3Response, publish: true})
        } catch (error) {
            console.log('error', error)
            yield put(addError(error.response))
        }
    } else if (phase === Scopes.EDIT && !audioEdited && photoEdited) {
        try {
            const s3Response = yield call(uploadPhoto, {title, newPhotoSrc});
            yield put(uploadSucceeded(s3Response))
            yield call(putPlacecastSaga, {...s3Response, publish: true })
        } catch (error) {
            console.log('error', error)
            yield put(addError(error.response))

        }
    } else if (phase === Scopes.EDIT && !audioEdited && !photoEdited) {
        try {
            yield call(putPlacecastSaga, { publish: true })
        } catch (error) {
            console.log('error', error)
            yield put(putPlacecastFailed(error));
            yield put(addError(error.response))

        }
    }

}