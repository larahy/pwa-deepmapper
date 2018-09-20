import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SkippableStepHeader from './SkippableStepHeader'
import {photoSkipped} from '../../../actions/placecasts/create'
import {photoStepCompleted} from '../../../actions/placecasts/create'
import {getTitle} from '../../../selectors/create'
import PropTypes from 'prop-types'

class PhotoPage extends Component {

    static propTypes = {
        placeCastTitle: PropTypes.string,
        error: PropTypes.object,
    }

    constructor(props) {
        super(props)
        this.state = {
            file: null,
            readyToSubmit: false
        }
    }

    onPhotoChosen = (e) => {
        const fileList = e.target.files
        let file = null;

        for (let i = 0; i < fileList.length; i++) {
            if (fileList[i].type.match(/^image\//)) {
                file = fileList[i];
                break;
            }
        }
        if (file !== null) {
            this.setState({
                file: file,
                readyToSubmit: true
            })
        }
        this.displayPhoto(file)
        e.preventDefault()
    }

    displayPhoto = (file) => {
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(file)
    }


    render() {
        const {error} = this.props;
        const imageClasses = this.state.readyToSubmit ? '' : 'is-hidden'
        const instructionsClasses = this.state.readyToSubmit ? 'is-hidden' : ''
        const buttonText = this.state.readyToSubmit ? 'Choose a different photo' : 'Choose a photo'
        return (
            <Fragment>
                <SkippableStepHeader
                    title='STEP 2: PHOTO'
                    readyToSubmitOther={this.state.readyToSubmit}
                    onSkip={photoSkipped()}
                    onNext={dispatch => (dispatch(photoStepCompleted(this.state.file, this.props.placeCastTitle)))}/>
                <div className="steps-container">
                    <div className="container has-text-centered">
                        <div className={imageClasses}>
                            <figure className="image is-4by3">
                                <img id="output"/>
                            </figure>
                        </div>
                        <div className={instructionsClasses}>
                            <h2 className="subtitle is-4">
                                Please choose or take a photo to accompany your placecast
                            </h2>
                        </div>
                        <br></br>
                        <div className="field">
                            <div className="file is-centered">
                                <label className="file-label">
                                    <input className="file-input" type="file" accept="image/*" onChange={this.onPhotoChosen}/>
                                    <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">{buttonText}</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div>
                            {error && <div className="notification is-warning">
                               Oh dear .. something went wrong. Please check your internet connection is active and try again.
                            </div>}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        placeCastTitle: getTitle(state),
        error: state.s3.photoError

    };
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);

