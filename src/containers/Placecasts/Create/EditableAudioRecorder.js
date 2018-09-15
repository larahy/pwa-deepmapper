import {connect} from 'react-redux'
import {audioSkipped} from '../../../actions/placecasts/create'
import AudioRecorder from '../../../components/Placecasts/Create/AudioRecorder'

export const mapStateToProps = (_, ownProps) => {
    return  {
        ...ownProps,
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onNext: () => dispatch(audioSkipped()),
    }
}

const EditableAudioRecorder = connect(
    mapStateToProps,
    mapDispatchToProps
)(AudioRecorder)

export default EditableAudioRecorder
