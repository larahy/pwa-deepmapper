import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {saveNewAudio} from '../../actions/edit'
import EditAudioButtonsContainer from '../../containers/Audio/EditAudioButtonsContainer'

class EditableAudioPlayback extends React.Component {

    render() {
        const {audioSrc, newAudioSrc} = this.props
        const src = newAudioSrc ? newAudioSrc : audioSrc
        return (
            <Fragment>
                <audio controls src={src}/>
                <EditAudioButtonsContainer
                    onSave={dispatch => (dispatch(saveNewAudio(newAudioSrc)))}/>
            </Fragment>
        )
    }
}

EditableAudioPlayback.propTypes = {
    audioSrc: PropTypes.string,
    newAudioSrc: PropTypes.string,
    isEditing: PropTypes.bool
}

export default EditableAudioPlayback;