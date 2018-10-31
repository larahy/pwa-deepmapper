import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Promise from 'bluebird'
import connect from 'react-redux/es/connect/connect'
import imageCompression from 'browser-image-compression';
import {editUploadPhotoFile} from '../../actions/edit'

class EditUploadPhotoFile extends Component {


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
                //TODO: HANDLE ERRORS HERE//
                console.log(error.message);
            });
        return Promise.resolve(compressedFilePromise)
            .then((data) => {
                return imageCompression.getDataUrlFromFile(data)
            })
            .then((data) => {
                return this.props.onSelectPhoto(data)
            })
    }

    render() {
        return (
            <div className="field navbar-item">
                <div className="file is-centered">
                    <label className="file-label">
                        <input className="file-input" type="file" accept="image/*" onChange={this.handleLoadLocalFile}/>
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                        </span>
                    </label>
                </div>
            </div>
        );
    }
}

EditUploadPhotoFile.propTypes = {
    onSelectPhoto: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectPhoto: (file) => dispatch(editUploadPhotoFile(file)),
    };
};

export default connect(null, mapDispatchToProps)(EditUploadPhotoFile);
