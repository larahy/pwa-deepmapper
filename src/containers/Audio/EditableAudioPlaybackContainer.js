import {connect} from 'react-redux'
import {getIsEditing, getNewAudioSrc} from '../../selectors/edit'
import EditableAudioPlayback from '../../components/Audio/EditableAudioPlayback'
import {getAudioSrc} from '../../selectors/create'

export const mapStateToProps = (state) => {
    return {
        isEditing: getIsEditing(state),
        audioSrc: getAudioSrc(state),
        newAudioSrc: getNewAudioSrc(state)
    }
}

let EditableAudioPlaybackContainer = connect(
    mapStateToProps)(EditableAudioPlayback)


export default EditableAudioPlaybackContainer