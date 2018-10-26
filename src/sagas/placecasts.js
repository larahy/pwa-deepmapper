import {call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import {push} from 'react-router-redux'

import {
    fetchPlacecastsSucceeded,
    fetchPlacecastsFailed, postPlacecastSucceeded, postPlacecastFailed, updateCurrentViewTo
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
    const {title, pitch, heading, zoom, lat, lng, s3_audio_filename, s3_photo_filename, userId, token} = placecast
    return axios({
        method: 'post',
        url: `${apiUrl}/api/v1/placecasts`,
        headers: {
            'Content-Type': 'application/json',
            'X-Token': token
        },
        data: {
            'title': title,
            'subtitle': 'ignore me',
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
            'published': true
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

export function* postPlacecastSaga({response}) {
    const [ heading, pitch, zoom, lat, lng, title, userId, token] = yield [
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
        s3_audio_filename: response.audioFileName,
        s3_photo_filename: response.photoFileName
    }

    try {
        const response = yield call(postPlacecast, {placecast});
        const createdPlacecast = response.data;

        yield put({type: postPlacecastSucceeded().type, createdPlacecast});
        yield put(updateCurrentViewTo('photo'));
        yield put(push('/'));

    } catch (error) {
        yield put({type: postPlacecastFailed().type, error});
    }
}