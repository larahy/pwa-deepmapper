import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SkippableStepHeader from './SkippableStepHeader'
import {photoSkipped} from '../../../actions/placecasts/create'
import {photoStepCompleted} from '../../../actions/placecasts/create'

class PhotoPage extends Component {
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
        const imageClasses = this.state.readyToSubmit ? '' : 'is-hidden'
        const instructionsClasses = this.state.readyToSubmit ? 'is-hidden' : ''
        return (
            <Fragment>
                <SkippableStepHeader
                    title='PHOTO'
                    onSkip={photoSkipped()}
                    onNext={photoStepCompleted(this.state.file)}/>
                <div className="steps-container">
                    <div className="container has-text-centered">
                        <div className={imageClasses}>
                            <figure className="image is-3by2">
                                <img id="output"/>
                            </figure>
                        </div>
                        <div className={instructionsClasses}>
                            <h1 className="title is-2">
                                Step 1:
                            </h1>
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
                                        <span className="file-label">Choose a Photo…</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = () => {
    return {};
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);

