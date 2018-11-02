import {call, put, select} from 'redux-saga/effects';
import axios from 'axios';

import {
    fetchPlacecastsSucceeded,
    fetchPlacecastsFailed,
    postPlacecastSucceeded,
    postPlacecastFailed,
    updateCurrentViewTo,
    putPlacecastSucceeded,
    putPlacecastFailed
} from '../actions/placecasts'
import {
    getHeading,
    getLatitude,
    getLongitude,
    getPitch,
    getTitle,
    getZoom
} from '../selectors/create'
import {getLoggedInUserId, getToken} from '../selectors/session'
import {goToMyDeepMapper} from '../actions/navigation'
import {getPlacecastId} from '../selectors/edit'

/* eslint-disable no-undef */
const apiUrl = API_URL
/* eslint-disable no-undef */

function fetchPlacecasts() {
    return axios({
        method: 'get',
        url: `${apiUrl}/api/v1/placecasts`
    });
}

function postPlacecast({placecast}) {
    const {title, pitch, heading, zoom, lat, lng, s3_audio_filename, s3_photo_filename, userId, token, publish} = placecast
    return axios({
        method: 'post',
        url: `${apiUrl}/api/v1/placecasts`,
        headers: {
            'Content-Type': 'application/json',
            'X-Token': token
        },
        data: {
            'title': title,
            'coordinates': [
                parseFloat(lng),
                parseFloat(lat)
            ],
            'user_id': userId,
            's3_audio_filename': s3_audio_filename,
            's3_photo_filename': s3_photo_filename,
            'pitch': pitch,
            'heading': heading,
            'zoom': parseInt(zoom),
            'published': publish
        }
    });


}

export function* placecastsWorkerSaga() {
    try {
        const response = yield call(fetchPlacecasts);
        const placecasts = response.data.content._embedded.placecasts;
        yield put({type: fetchPlacecastsSucceeded().type, placecasts});
    } catch (error) {
        yield put({type: fetchPlacecastsFailed().type, error});
    }
}

export function* postPlacecastSaga(response) {
    const [heading, pitch, zoom, lat, lng, title, userId, token] = yield [
        select(getHeading),
        select(getPitch),
        select(getZoom),
        select(getLatitude),
        select(getLongitude),
        select(getTitle),
        select(getLoggedInUserId),
        select(getToken)
    ]
    const placecast = {
        heading,
        pitch,
        zoom,
        lat,
        lng,
        title,
        userId,
        token,
        publish: response.publish,
        s3_audio_filename: response.audioFileName,
        s3_photo_filename: response.photoFileName
    }
    try {
        const response = yield call(postPlacecast, {placecast});
        const createdPlacecast = response.data;
        yield put(postPlacecastSucceeded(createdPlacecast));
        yield put(updateCurrentViewTo('photo'));
        yield put(goToMyDeepMapper());
    } catch (error) {
        yield put(postPlacecastFailed(error))
    }
}


const buildPlacecast = ({title, subtitle, coordinates, s3_audio_filename, s3_photo_filename, published, user_id, heading, pitch, zoom} = {}) => {
    return {
        title,
        subtitle,
        coordinates,
        published,
        user_id,
        s3_photo_filename,
        s3_audio_filename,
        heading,
        pitch,
        zoom
    }
}


function putPlacecast({placecast}) {
    const {title, pitch, heading, zoom, lat, lng, s3_audio_filename, s3_photo_filename, userId, token, id, publish} = placecast
    const data = buildPlacecast({
        'title': title,
        'coordinates': [
            parseFloat(lng),
            parseFloat(lat)
        ],
        'user_id': userId,
        's3_audio_filename': s3_audio_filename,
        's3_photo_filename': s3_photo_filename,
        'pitch': pitch,
        'heading': heading,
        'zoom': parseInt(zoom),
        'published': publish
    })
    console.log('data ', data)
    return axios({
        method: 'put',
        url: `${apiUrl}/api/v1/placecasts/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Token': token
        },
        data: data
    });

}

export function* putPlacecastSaga(response) {
    const [heading, pitch, zoom, lat, lng, title, userId, token, id] = yield [
        select(getHeading),
        select(getPitch),
        select(getZoom),
        select(getLatitude),
        select(getLongitude),
        select(getTitle),
        select(getLoggedInUserId),
        select(getToken),
        select(getPlacecastId)
    ]
    const placecast = {
        heading,
        pitch,
        zoom,
        lat,
        lng,
        title,
        userId,
        token,
        id,
        publish: response.publish,
        s3_audio_filename: response.audioFileName,
        s3_photo_filename: response.photoFileName
    }

    try {
        const response = yield call(putPlacecast, {placecast});
        const updatedPlacecast = response.data;
        yield put(putPlacecastSucceeded(updatedPlacecast))
        yield put(updateCurrentViewTo('photo'));
        yield put(goToMyDeepMapper());

    } catch (error) {
        yield put(putPlacecastFailed(error))
    }
}