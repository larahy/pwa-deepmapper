import {connect} from 'react-redux'
import {getNewAudioSrc} from '../../selectors/edit'
import EditableAudioPlayback from '../../components/Audio/EditableAudioPlayback'
import {getAudioSrc} from '../../selectors/create'

export const mapStateToProps = (state) => {
    return {
        audioSrc: getAudioSrc(state),
        newAudioSrc: getNewAudioSrc(state)
    }
}

let EditableAudioPlaybackContainer = connect(
    mapStateToProps)(EditableAudioPlayback)


export default EditableAudioPlaybackContainer