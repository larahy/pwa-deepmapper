import {connect} from 'react-redux'

import PlaybackPanel from '../../../components/Audio/PlaybackPanel'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
    }
}

const PlaybackPanelContainer = connect(
    mapStateToProps
)(PlaybackPanel)

export default PlaybackPanelContainer
