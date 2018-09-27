import {call, put} from 'redux-saga/effects';
// import {push} from 'react-router-redux'
import {
    fetchBucketContentsSucceeded,
    fetchBucketContentsFailed,
    uploadFailed,
    uploadSucceeded
} from '../actions/s3'
import Promise from 'bluebird'
import imageCompression from 'browser-image-compression'
import {snakeCase, words} from 'lodash'

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

function uploadPhoto(action) {
    let photoFileName
    let audioFileName
    const title = action.payload.title
    const photoFileDataURL = action.payload.photoSrc
    const audioFileSrc = action.payload.audioSrc
    const compressedPhotoFilePromise = imageCompression.getFilefromDataUrl(photoFileDataURL) // maxSizeMB, maxWidthOrHeight are optional
    return Promise.resolve(compressedPhotoFilePromise)
        .then((file) => {
            const fileType = words(file.type, '[^\\/]+$')
            photoFileName = `${snakeCase(title)}.${fileType[0]}`
            const addObjectPromise = s3.upload({
                Key: photoFileName,
                Body: file,
                ACL: 'public-read'
            }).promise()
            return addObjectPromise.then(function (data) {
                photoFileName = data.Key
                return
            })
        })
        .then((photoFileName) => {
            return Promise.all([photoFileName, fetch(audioFileSrc)
                .then(res => res.blob())
                .then(blob => {
                    const file = new File([blob], '', {type: 'audio/mpeg', lastModified: Date.now()});
                    return file
                })])
        })
        .then(([photoFileName, audioFile]) => {
            const audioFileType = words(audioFile.type, '[^\\/]+$')
            audioFileName = `${snakeCase(title)}.${audioFileType[0]}`
            const addObjectPromise = s3.upload({
                Key: audioFileName,
                Body: audioFile,
                ACL: 'public-read'
            }).promise()
            return [photoFileName, addObjectPromise.then(function (data) {
                audioFileName = data.Key
                return
            })]
        })
        .then(() => {
            return {photoFileName, audioFileName}
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

export function* uploadSaga(action) {
    try {
        const response = yield call(uploadPhoto, action);
        yield put({type: uploadSucceeded().type, response});
    } catch (error) {
        console.log('error', error)
        yield put({type: uploadFailed().type, error});
    }
}
