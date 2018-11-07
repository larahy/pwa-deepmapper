/* eslint-disable */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import vmsg from 'vmsg';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faMicrophone, faFileUpload, faStop, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {isEmpty} from 'lodash'
import connect from 'react-redux/es/connect/connect'
import {editAudio} from '../../actions/edit'
import './Audio.scss'

const recorder = new vmsg.Recorder({
    wasmURL: 'https://unpkg.com/vmsg@0.3.0/vmsg.wasm'
});

class AudioRecorder extends Component {

    static propTypes = {
        loadAudio: PropTypes.func,
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
            return this.props.loadAudio(this.state.recording)
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
        return this.props.loadAudio(URL.createObjectURL(file))
    }


    render() {
        const {isRecording, recording} = this.state;
        const recordingElement = isRecording ?
            //TODO INSERT TIMER HERE//
            <div>
              <div className='record-button'>
                Stop recording
                <i className='fas fa-stop' onClick={this.record} />
              </div>
            </div>
            :
            <div>
              <div className='record-button'>
                Start recording
                <i className='fas fa-microphone' onClick={this.record} />
              </div>
            </div>

        const uploadElement = isEmpty(recording) ?
            <a className="button">
                <div className="file">
                    <label className="file-label">
                        <input className="file-input" type="file" accept="audio/*" onChange={this.onAudioChosen} capture/>
                        <span className="file-cta">
                        <span className="file-icon"><i className="fas fa-upload"></i></span>
                        <span className="file-label">UPLOAD AUDIO</span>
                        </span>
                    </label>
                </div>
            </a>
            : null
        return (
            <Fragment>
                <div className="record-section">
                    {recordingElement}
                    {uploadElement}
                </div>
            </Fragment>
        )
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        loadAudio: (file) => dispatch(editAudio(file)),
    }
}

export default connect(null, mapDispatchToProps)(AudioRecorder);

