import {connect} from 'react-redux'
// import {
//     isReadyToSubmitInfo,
// } from '../../../selectors/create'
import PlaybackPanel2 from '../../../components/Audio/PlaybackPanel2'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        // src: isReadyToSubmitInfo(state)
    }
}

const UpdatablePlaybackPanel = connect(
    mapStateToProps
)(PlaybackPanel2)

export default UpdatablePlaybackPanel
