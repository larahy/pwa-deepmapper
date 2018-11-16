/* eslint-disable */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {audioStepCompleted} from './create'
import {getAudioSrc, getPhotoSrc, getTitle} from '../selectors/create'
import PropTypes from 'prop-types'
import vmsg from 'vmsg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone, faFileUpload, faStop, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {isEmpty} from 'lodash'
import PhotoPanel from '../components/Photo/PhotoPanel'
import {Headers} from '../constants/attributes'
import HeaderWithNavigationContainer from '../containers/Shared/HeaderWithNavigationContainer'
import {goToCreatePhotoPage} from '../actions/navigation'

const recorder = new vmsg.Recorder({
    wasmURL: 'https://unpkg.com/vmsg@0.3.0/vmsg.wasm'
});

class AudioPage extends Component {

    static propTypes = {
        placeCastTitle: PropTypes.string,
        photoSrc: PropTypes.string,
        audioSrc: PropTypes.string,
        loading: PropTypes.bool,
        file: PropTypes.string
    }

    constructor(props) {
        super(props)
        this.state = {
            readyToSubmit: false,
            isLoading: false,
            isRecording: false,
            recording: this.props.audioSrc,
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
                recording: URL.createObjectURL(blob),
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
            recording: URL.createObjectURL(file),
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
        const {photoSrc} = this.props

        const playbackElement = isEmpty(recording) ? <audio></audio> : <audio controls src={recording}></audio>
        const recordingElement = isRecording ?
            <a className='button is-medium is-danger is-inverted is-fullwidth' onClick={this.record}>
                                                    <span className="icon is-large">
                                                    <FontAwesomeIcon icon={faStop}/>
                                                    </span>
            </a>
            :
            <a className='button is-medium is-light is-fullwidth' onClick={this.record}>
                                                    <span className="icon is-large">
                                                    <FontAwesomeIcon icon={faMicrophone}/>
                                                    </span>
            </a>

        return (
            <Fragment>
                <HeaderWithNavigationContainer
                    displayBackButton={true}
                    displayNextButton={true}
                    title={Headers.AUDIO}
                    readyToSubmit={this.state.readyToSubmit}
                    onBack={goToCreatePhotoPage()}
                    onNext={dispatch => (dispatch(audioStepCompleted(this.state.recording)))}/>

                <div className="columns is-desktop">
                    <div className='column is-6 is-offset-3'>
                        <PhotoPanel sourceUrl={photoSrc}/>
                        <div className="box">
                            {playbackElement}
                        </div>

                        <div className="column">
                            {recordingElement}
                        </div>


                        <div className="column">
                            <div className="field recorder-controls">
                                <div className="file is-centered is-light">
                                    <label className="file-label">
                                        <input className="file-input" type="file"
                                               accept="audio/*"
                                               onChange={this.onAudioChosen} capture
                                               id="recorder"/>
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
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        placeCastTitle: getTitle(state),
        photoSrc: getPhotoSrc(state),
        audioSrc: getAudioSrc(state),
    };
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPage);

