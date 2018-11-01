import {connect} from 'react-redux'
import {getAudioSrc} from '../../selectors/create'
import EditableAudioPanel from '../../components/Audio/EditableAudioPanel'
import {getIsEditingAudio, getNewAudioSrc} from '../../selectors/edit'

export const mapStateToProps = (state) => {
    return {
        audioSrc: getAudioSrc(state),
        newAudioSrc: getNewAudioSrc(state),
        isEditingAudio: getIsEditingAudio(state),
    }
}

export const mapDispatchToProps = () => {
    return {
        // loadAudio: (file) => dispatch(audioAdded(file)),
    }
}

let EditableAudioPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditableAudioPanel)


export default EditableAudioPanelContainer