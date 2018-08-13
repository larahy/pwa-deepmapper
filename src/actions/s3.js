var AWS = require('aws-sdk');

/* eslint-disable no-undef */
AWS.config.update({region: 'us-east-1', credentials: {accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY}});
/* eslint-disable no-undef */

var s3 = new AWS.S3({apiVersion: '2006-03-01'});


function listObjects(bucket, callback) {
    s3.listObjects({
        Bucket: bucket
    }, callback);
}

// Export the handler function
module.exports = listObjects;