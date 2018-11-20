/* eslint-disable */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import vmsg from 'vmsg';
import {isEmpty} from 'lodash'
import connect from 'react-redux/es/connect/connect'
import {editAudioRecording} from '../../actions/edit'
import './Audio.scss'
import AudioRecorderTimer from './AudioRecorderTimer';

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
        const { isRecording, recording } = this.state;

        return (
            <div className="record-section">
                {isRecording && 
                  <Fragment>
                    <div className='record-button' onClick={this.record}>
                      <i className='fas fa-stop' />
                    </div>
                    <AudioRecorderTimer />
                  </Fragment>}

                {!isRecording && 
                  <div className='record-upload-audio'>
                      <div className='record-button-container'>
                          <div className='record-button' onClick={this.record}>
                              <i className='fas fa-microphone' />
                          </div>
                      </div>
                      <div className='audio-upload-container'>
                          <div className="audio-upload">
                              <label className="file-label">
                                  <input className="file-input" type="file" accept="audio/*" onChange={this.onAudioChosen} capture/>
                                  <i className="fas fa-upload"></i>
                              </label>
                          </div>
                      </div>
                  </div>}
            </div>
        );
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        loadAudio: (file) => dispatch(editAudioRecording(file)),
    }
}

export default connect(null, mapDispatchToProps)(AudioRecorder);

