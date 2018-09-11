import {call, put} from 'redux-saga/effects';
import {
    fetchBucketContentsSucceeded,
    fetchBucketContentsFailed,
    uploadAudioClipSucceeded,
    uploadAudioClipFailed,
    uploadPhotoFailed,
    uploadPhotoSucceeded
} from '../actions/s3'

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
    return listObjectsPromise.then(function(data) {
        return data.Contents
    }).catch(function(err) {
        return err
    })
}

function uploadAudioClip(action) {
    const filename = action.payload.file.name
    const file = action.payload.file

    const addObjectPromise = s3.upload({
        Key: filename,
        Body: file,
        ACL: 'public-read'
    }).promise()
    return addObjectPromise.then(function(data) {
        return data
    }).catch(function(err) {
        console.log('err', err)
        return err
    })
}

function uploadPhoto(action) {
    const filename = action.payload.file.name
    const file = action.payload.file

    const addObjectPromise = s3.upload({
        Key: filename,
        Body: file,
        ACL: 'public-read'
    }).promise()
    return addObjectPromise.then(function(data) {
        return data
    }).catch(function(err) {
        console.log('err', err)
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

export function* uploadSaga(action) {
    const fileType = action.payload.file.type

    if (fileType.match('image/w*')) {
        try {
            const response = yield call(uploadPhoto, action);

            yield put({type: uploadPhotoSucceeded().type, response});

        } catch (error) {
            yield put({type: uploadPhotoFailed().type, error});
        }
    }
    if (fileType.match('audio/w*')) {
        try {
            const response = yield call(uploadAudioClip, action);

            yield put({type: uploadAudioClipSucceeded().type, response});

        } catch (error) {
            yield put({type: uploadAudioClipFailed().type, error});
        }
    }
}
