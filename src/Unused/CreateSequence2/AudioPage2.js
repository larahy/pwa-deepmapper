/* eslint-disable */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import vmsg from 'vmsg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone, faFileUpload, faStop, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {isEmpty} from 'lodash'
import {CreateSequenceInstructions} from '../CreateSequenceInstructions'
import {step3Skipped} from '../../actions/create2'
import {audioAdded} from '../../actions/create2'
import HeaderWithNavigationContainer from '../../containers/Shared/HeaderWithNavigationContainer'
import {Headers} from '../../constants/attributes'
import {goToCreatePhotoPage} from '../../actions/navigation'
import connect from 'react-redux/es/connect/connect'

const recorder = new vmsg.Recorder({
    wasmURL: 'https://unpkg.com/vmsg@0.3.0/vmsg.wasm'
});

class AudioPage2 extends Component {

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
            <a className='button is-medium is-danger is-inverted is-fullwidth' onClick={this.record}>
                                                    <span className="icon is-large">
                                                    <FontAwesomeIcon icon={faStop}/>
                                                        STOP RECORDING
                                                    </span>
            </a>
            :
            <a className='button is-medium is-light is-fullwidth' onClick={this.record}>
                                                    <span className="icon is-large">
                                                    <FontAwesomeIcon icon={faMicrophone}/>
                                                        RECORD
                                                    </span>
            </a>
        const uploadElement = isEmpty(recording) ?
            <div>
                <input className="file-input" type="file" accept="audio/*" onChange={this.onAudioChosen} capture
                       id="recorder"/>
                <span className="file-cta icon is-large">
                <span className="icon is-large">
                <FontAwesomeIcon icon={faFileUpload}/>
                </span>
                <span className="file-label">UPLOAD AUDIO</span>
                </span>
            </div>
            : null
        return (
            <Fragment>
                <HeaderWithNavigationContainer
                    displayBackButton={true}
                    displayNextButton={true}
                    title={Headers.DEEPMAPPER}
                    readyToSubmit={this.state.readyToSubmit}
                    onBack={goToCreatePhotoPage()}
                    onNext={dispatch => (dispatch(step3Skipped()))}/>
                <CreateSequenceInstructions stepNumber='3'/>

                {recordingElement}
                {uploadElement}
            </Fragment>
        )
    }
}


export const mapDispatchToProps = (dispatch) => {
    return {
        loadAudio: (file) => dispatch(audioAdded(file)),
    }
}

export default connect(null, mapDispatchToProps)(AudioPage2);

