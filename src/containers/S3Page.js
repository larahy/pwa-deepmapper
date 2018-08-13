import React from 'react';
import PropTypes from 'prop-types'

var listObjects = require('../actions/s3');
var bucket = 'deepmapper';

export default class S3Page extends React.Component {

    constructor(props) {
        super(props);
        this.rippleClickFunction = this.rippleClickFunction.bind(this);
    }

    rippleClickFunction() {

        listObjects(bucket, function (err, data) {
            if (err) {
                alert(err);
            } else {
                var listElement = document.getElementById('list');
                var content = 'S3 Objects in ' + bucket + ':n';
                content += data.Contents.map(function (metadata) {
                    return 'Key: ' + metadata.Key;
                }).join('n');
                listElement.innerText = content;
            }
        });
    }

    render() {
        return (
            <div className='container is-fluid'>
                <h2>HELLO BRENDA</h2>
                <div id="list"></div>
                <button className='btn default' onClick={this.rippleClickFunction}>FETCH S3 BUCKET</button>
            </div>)
    }
}

S3Page.propTypes = {
    speakText: PropTypes.func,
}


