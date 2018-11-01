import {call, put, select} from 'redux-saga/effects';
import {
    fetchBucketContentsSucceeded,
    fetchBucketContentsFailed,
    uploadSucceeded,
    uploadFailed,
    uploadPhotoSucceeded,
    uploadPhotoFailed,
    uploadAudioSucceeded, uploadAudioFailed,
} from '../actions/s3'
import Promise from 'bluebird'
import {snakeCase, words} from 'lodash'
import imageCompression from 'browser-image-compression'
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
import {getEditableTitle, getNewPhotoSrc} from '../selectors/edit'

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


function fetchBucketContents() {
    const listObjectsPromise = s3.listObjects({
        Bucket: bucket
    }).promise()
    return listObjectsPromise.then(function (data) {
        return data.Contents
    }).catch(function (err) {
        return err
    })
}

export function* s3WorkerSaga() {
    try {
        const response = yield call(fetchBucketContents);

        yield put({type: fetchBucketContentsSucceeded().type, response});

    } catch (error) {
        yield put({type: fetchBucketContentsFailed().type, error});
    }
}

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


function uploadPhotoAndAudio({placecast}) {
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
        const response = yield call(uploadPhotoAndAudio, {placecast});
        yield put({type: uploadSucceeded().type, response});
        yield call(postPlacecastSaga, { response })
    } catch (error) {
        console.log('error', error)
        yield put({type: uploadFailed().type, error});
    }

}

function uploadPhoto({placecast}) {
    let photoFileName
    const compressedPhotoFilePromise = imageCompression.getFilefromDataUrl(placecast.photoSrc) // maxSizeMB, maxWidthOrHeight are optional
    return Promise.resolve(compressedPhotoFilePromise)
        .then((file) => {
            const fileType = words(file.type, '[^\\/]+$')
            photoFileName = `${snakeCase(placecast.title)}.${fileType[0]}`
            return putObject(file, photoFileName)
        })
        .then(response => {
            photoFileName = response.Key
            return {photoFileName}
        })
        .catch(err => {
            console.log('error', err)
        })

}

export function* uploadPhotoSaga() {
    const [ photoSrc, title ] = yield [
        select(getNewPhotoSrc),
        select(getEditableTitle)
    ]
    const placecast = {title, photoSrc}
    try {
        const response = yield call(uploadPhoto, {placecast});
        yield put({type: uploadPhotoSucceeded().type, response});
    } catch (error) {
        console.log('error', error)
        yield put({type: uploadPhotoFailed().type, error});
    }

}


function uploadAudio({placecast}) {
    let audioFileName = `${snakeCase(placecast.title)}.mpeg`
    return fetchFile(placecast.audioSrc, audioFileName)
        .then((file) => {
            return putObject(file, audioFileName)
        })
        .then(response => {
            audioFileName = response.Key
            return audioFileName
        })
        .catch(err => {
            console.log('error', err)
        })

}

export function* uploadAudioSaga() {
    const [ audioSrc, title ] = yield [
        select(getAudioSrc),
        select(getTitle)
    ]
    const placecast = {title, audioSrc}
    try {
        const response = yield call(uploadAudio, {placecast});
        yield put({type: uploadAudioSucceeded().type, response});
    } catch (error) {
        console.log('error', error)
        yield put({type: uploadAudioFailed().type, error});
    }

}



