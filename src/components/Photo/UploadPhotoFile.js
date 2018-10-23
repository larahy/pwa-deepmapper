import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Promise from 'bluebird'
import connect from 'react-redux/es/connect/connect'
import {loadPhotoFile} from '../../actions/placecasts/create'
import imageCompression from 'browser-image-compression';
import {isEmpty} from 'lodash'
import {getPhotoSrc} from '../../selectors/create'

class UploadPhotoFile extends Component {


    handleLoadLocalFile = (event) => {
        event.preventDefault();
        var imageFile = event.target.files[0];

        var maxSizeMB = 1;
        var maxWidthOrHeight = 1920; // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight
        const compressedFilePromise = imageCompression(imageFile, maxSizeMB, maxWidthOrHeight) // maxSizeMB, maxWidthOrHeight are optional
            .then(function (compressedFile) {
                return compressedFile
            })
            .catch(function (error) {
                console.log(error.message);
            });
        return Promise.resolve(compressedFilePromise)
            .then((data) => {
                return imageCompression.getDataUrlFromFile(data)
            })
            .then((data) => {
                return this.props.onFileLoaded(data)
            })
    }

    render() {
        const {photoSrc} = this.props;

        const readyToSubmit = !isEmpty(photoSrc)

        const buttonText = readyToSubmit ? 'Select a different photo' : 'Select photo'
        return (
            <div className="field">
                <div className="file is-centered">
                    <label className="file-label">
                        <input className="file-input" type="file" accept="image/*" onChange={this.handleLoadLocalFile}/>
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label">{buttonText}</span>
                        </span>
                    </label>
                </div>
            </div>
        );
    }
}

UploadPhotoFile.propTypes = {
    onFileLoaded: PropTypes.func.isRequired,
    photoSrc: PropTypes.string
};

const mapDispatchToProps = dispatch => {
    return {
        onFileLoaded: (file) => dispatch(loadPhotoFile(file)),
    };
};

const mapStateToProps = (state) => {
    return {
        photoSrc: getPhotoSrc(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotoFile);