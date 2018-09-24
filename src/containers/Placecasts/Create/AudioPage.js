/* eslint-disable */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SkippableStepHeader from './SkippableStepHeader'
import {audioSkipped} from '../../../actions/placecasts/create'
import {audioStepCompleted} from '../../../actions/placecasts/create'
import {getPhotoSrc, getTitle} from '../../../selectors/create'
import PropTypes from 'prop-types'
import vmsg from 'vmsg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone, faFileUpload, faStop, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {isEmpty} from 'lodash'
import UpdatablePlaybackPanel from './UpdatablePlaybackPanel'

const recorder = new vmsg.Recorder({
    wasmURL: 'https://unpkg.com/vmsg@0.3.0/vmsg.wasm'
});

class AudioPage extends Component {

    static propTypes = {
        placeCastTitle: PropTypes.string,
        photoSrc: PropTypes.string,
        loading: PropTypes.bool
    }

    constructor(props) {
        super(props)
        this.state = {
            readyToSubmit: false,
            isLoading: false,
            isRecording: false,
            recording: {},
            file: null
        }
    }

    record = async () => {
        this.setState({isLoading: true});

        if (this.state.isRecording) {
            const blob = await recorder.stopRecording();
            const file = new File([blob], 'blob.mp3', {type: 'audio/mpeg', lastModified: Date.now()});
            this.setState({
                isLoading: false,
                isRecording: false,
                recording: {src: URL.createObjectURL(blob)},
                file: file,
                readyToSubmit: true
            })
        } else {
            try {
                await recorder.initAudio();
                await recorder.initWorker();
                recorder.startRecording();
                this.setState({isLoading: false, isRecording: true});
            } catch (e) {
                console.error(e);
                this.setState({isLoading: false});
            }
        }
    }

    onAudioChosen = (e) => {
        const file = e.target.files[0];
        this.setState({
            recording: {src: URL.createObjectURL(file)},
            readyToSubmit: true,
            file: file
        })
        e.preventDefault()
    }


    handleDelete = (event) => {
        const player = document.querySelector('audio')
        player.src = null
        event.preventDefault()
    }


    render() {
        const {isRecording, recording} = this.state;
        const {photoSrc, error, loading} = this.props
        const loadingElementClasses = loading ? '' : 'is-hidden'

        const playbackElement = isEmpty(recording) ? <audio></audio> : <UpdatablePlaybackPanel src={recording.src}/>
        const imageSrcUrl = photoSrc === "" ? 'https://bulma.io/images/placeholders/640x480.png' : photoSrc
        const recordingElement = isRecording ?
          <a className='button is-medium is-danger is-inverted is-fullwidth' onClick={this.record} >
                                                    <span className="icon is-large">
                                                    <FontAwesomeIcon icon={faStop}/>
                                                    </span>
          </a>
          :
          <a className='button is-medium is-light is-fullwidth' onClick={this.record} >
                                                    <span className="icon is-large">
                                                    <FontAwesomeIcon icon={faMicrophone}/>
                                                    </span>
          </a>

        return (
            <Fragment>
                <SkippableStepHeader
                    title='STEP 3: AUDIO'
                    readyToSubmitOther={this.state.readyToSubmit}
                    onSkip={audioSkipped()}
                    onNext={dispatch => (dispatch(audioStepCompleted(this.state.file, this.props.placeCastTitle)))}/>
                <div className="steps-container is-centered">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className={loadingElementClasses}>
                                <p>
                                    Loading audio&hellip;
                                </p>
                            </div>
                            <div className="column is-two-thirds is-centered">
                                <div className="tile is-parent">
                                    <article className="tile is-child">
                                        <p className="title">Record your placecast</p>
                                        <p className="subtitle">Please try to minimise background noise</p>
                                        <figure className="image is-4by3">
                                            <img src={imageSrcUrl} />
                                        </figure>
                                    </article>
                                </div>
                                {playbackElement}
                                <div className="tile is-parent">
                                    <article className="tile is-child">
                                        <div className="columns is-mobile is-centered">
                                            <div className="column">
                                                {recordingElement}
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child">
                                        <div className="columns is-mobile is-centered">
                                            <div className="column">
                                                <div className="field recorder-controls">
                                                    <div className="file is-centered is-light">
                                                        <label className="file-label">
                                                            <input className="file-input" type="file" accept="audio/*" onChange={this.onAudioChosen} capture id="recorder"/>
                                                            <span className="file-cta icon is-large">
                                                                <span className="icon is-large">
                                                                    <FontAwesomeIcon icon={faFileUpload}/>
                                                                </span>
                                                                <span className="file-label">Upload audio</span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div>
                                    {error && <div className="notification is-warning">
                                        Oh dear .. something went wrong. Please check your internet connection is active and try again.
                                    </div>}
                                </div>
                            </div>
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
        photoSrc: getPhotoSrc(state),
        error: state.s3.audioError,
        loading: state.s3.uploadProcessing,
    };
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPage);

