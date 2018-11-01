import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import AudioRecorder from './AudioRecorder'
import EditableAudioPlaybackContainer from '../../containers/Audio/EditableAudioPlaybackContainer'


class EditableAudioPanel extends React.Component {

    render() {
        const {audioSrc, newAudioSrc, isEditingAudio} = this.props

        const mainElement = audioSrc === '' && newAudioSrc === '' || isEditingAudio ? <AudioRecorder /> : <EditableAudioPlaybackContainer />

        return (
            <Fragment>
                {mainElement}
            </Fragment>
        )
    }
}

EditableAudioPanel.propTypes = {
    audioSrc: PropTypes.string,
    newAudioSrc: PropTypes.string,
    isEditingAudio: PropTypes.bool
}

export default EditableAudioPanel;