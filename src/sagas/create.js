/* eslint-disable */

import {call, put, select} from 'redux-saga/effects';
// import {push} from 'react-router-redux'
import {
    uploadFailed,
    uploadSucceeded
} from '../actions/s3'
import Promise from 'bluebird'
import imageCompression from 'browser-image-compression'
import {snakeCase, words} from 'lodash'
import {
    getAudioSrc,
    getHeading,
    getLatitude,
    getLongitude,
    getPhotoSrc,
    getPitch,
    getTitle,
    getZoom
} from '../selectors/create'
import {postPlacecastSaga} from './placecasts'

var AWS = require('aws-sdk');

/* eslint-disable no-undef */
AWS.config.update({
    region: 'us-east-1',
    credentials: {accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY}
});
/* eslint-disable no-undef */
var bucket = 'deepmapper';

var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: bucket}
});

function fetchFile(fileSrc, fileName) {
    return fetch(fileSrc)
        .then(res => res.blob())
        .then(blob => {
            const file = new File([blob], fileName, {type: 'audio/mpeg', lastModified: Date.now()});
            return file
        })
}


if (typeof Promise === 'undefined') {
    AWS.config.setPromisesDependency(require('bluebird'));
}

const putObject = function putObject(file, filename) {
    const addObjectPromise = s3.upload({
        Key: filename,
        Body: file,
        ACL: 'public-read'
    }).promise()
    return addObjectPromise.then(function (data) {
        return data
    })
}


function uploadPhoto({placecast}) {
    let photoFileName
    let audioFileName = `${snakeCase(placecast.title)}.mpeg`
    const compressedPhotoFilePromise = imageCompression.getFilefromDataUrl(placecast.photoSrc) // maxSizeMB, maxWidthOrHeight are optional
    return fetchFile(placecast.audioSrc, audioFileName)
        .then((file) => {
            return putObject(file, audioFileName)
        })
        .then(response => {
            audioFileName = response.Key
            return Promise.resolve(compressedPhotoFilePromise)
        })
        .then((file) => {
            const fileType = words(file.type, '[^\\/]+$')
            photoFileName = `${snakeCase(placecast.title)}.${fileType[0]}`
            return putObject(file, photoFileName)
        })
        .then(response => {
            photoFileName = response.Key
            return {audioFileName, photoFileName}
        })
        .catch(err => {
            console.log('error', err)
        })

}

export function* uploadSaga() {
    const [ heading, pitch, zoom, lat, lng, title, photoSrc, audioSrc ] = yield [
        select(getHeading),
        select(getPitch),
        select(getZoom),
        select(getLatitude),
        select(getLongitude),
        select(getTitle),
        select(getPhotoSrc),
        select(getAudioSrc),
    ]
    const placecast = {heading, pitch, zoom, lat, lng, title, photoSrc, audioSrc}
    try {
        const response = yield call(uploadPhoto, {placecast});
        yield put({type: uploadSucceeded().type, response});
        yield call(postPlacecastSaga, { response })
    } catch (error) {
        console.log('error', error)
        yield put({type: uploadFailed().type, error});
    }

}