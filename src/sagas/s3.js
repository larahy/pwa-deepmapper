import {call, put, select} from 'redux-saga/effects';
import {
    fetchBucketContentsSucceeded,
    fetchBucketContentsFailed,
    uploadPhotoSucceeded,
    uploadPhotoFailed,
    uploadAudioSucceeded, uploadAudioFailed,
} from '../actions/s3'
import Promise from 'bluebird'
import {snakeCase, words} from 'lodash'
import imageCompression from 'browser-image-compression'
import {
    getTitle,
} from '../selectors/create'
import {getEditableTitle, getNewAudioSrc, getNewPhotoSrc} from '../selectors/edit'

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


export function uploadPhotoAndAudio({title, newPhotoSrc, newAudioSrc}) {
    let photoFileName
    let audioFileName = `${snakeCase(title)}.mpeg`
    const compressedPhotoFilePromise = imageCompression.getFilefromDataUrl(newPhotoSrc) // maxSizeMB, maxWidthOrHeight are optional
    return fetchFile(newAudioSrc, audioFileName)
        .then((file) => {
            return putObject(file, audioFileName)
        })
        .then(response => {
            audioFileName = response.Key
            return Promise.resolve(compressedPhotoFilePromise)
        })
        .then((file) => {
            const fileType = words(file.type, '[^\\/]+$')
            photoFileName = `${snakeCase(title)}.${fileType[0]}`
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

export function uploadPhoto({title, newPhotoSrc}) {
    let photoFileName
    const compressedPhotoFilePromise = imageCompression.getFilefromDataUrl(newPhotoSrc) // maxSizeMB, maxWidthOrHeight are optional
    return Promise.resolve(compressedPhotoFilePromise)
        .then((file) => {
            const fileType = words(file.type, '[^\\/]+$')
            photoFileName = `${snakeCase(title)}.${fileType[0]}`
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


export function uploadAudio({newAudioSrc, title}) {
    let audioFileName = `${snakeCase(title)}.mpeg`
    return fetchFile(newAudioSrc, audioFileName)
        .then((file) => {
            return putObject(file, audioFileName)
        })
        .then(response => {
            audioFileName = response.Key
            return {audioFileName}
        })
        .catch(err => {
            console.log('error', err)
        })

}

export function* uploadAudioSaga() {
    const [ audioSrc, title ] = yield [
        select(getNewAudioSrc),
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



