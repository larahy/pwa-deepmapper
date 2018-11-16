import {connect} from 'react-redux'
import {isEmpty} from 'lodash'

import SaveOrPublishOrDeleteIcons from '../../components/Placecasts/SaveOrPublishOrDeleteIcons'
import {getAddress, getAudioSrc, getPhotoSrc, getTitle} from '../../selectors/create'
import {getNewAudioSrc, getNewPhotoSrc} from '../../selectors/edit'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        isSavable: !isEmpty(getTitle(state)),
        isPublishable:
            (!isEmpty(getPhotoSrc(state)) || !isEmpty(getNewPhotoSrc(state)))
            && (!isEmpty(getAudioSrc(state)) || !isEmpty(getNewAudioSrc(state)))
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
