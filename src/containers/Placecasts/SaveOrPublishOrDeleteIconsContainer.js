import {connect} from 'react-redux'
import {isEmpty} from 'lodash'

import SaveOrPublishOrDeleteIcons from '../../components/Placecasts/SaveOrPublishOrDeleteIcons'
import {getAddress, getAudioSrc, getPhotoSrc, getTitle} from '../../selectors/create'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        isPublishable:
            !isEmpty(getPhotoSrc(state))
            && !isEmpty(getAudioSrc(state))
            && !isEmpty(getAddress(state))
            && !isEmpty(getTitle(state))

    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSave: () => dispatch(ownProps.onSave),
        onDelete: () => dispatch(ownProps.onDelete),
        onPublish: () => dispatch(ownProps.onPublish)
    }
}

const SaveOrPublishOrDeleteIconsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SaveOrPublishOrDeleteIcons)

export default SaveOrPublishOrDeleteIconsContainer
