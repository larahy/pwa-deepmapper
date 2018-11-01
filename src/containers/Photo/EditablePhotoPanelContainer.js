import {connect} from 'react-redux'
import {getIsEditing, getNewPhotoSrc} from '../../selectors/edit'
import EditablePhotoPanel from '../../components/Photo/EditablePhotoPanel'
import {getPhotoSrc} from '../../selectors/create'

export const mapStateToProps = (state) => {
    return {
        sourceUrl: getPhotoSrc(state),
        newPhotoSrc: getNewPhotoSrc(state),
        isEditing: getIsEditing(state)
    }
}

let EditablePhotoPanelContainer = connect(
    mapStateToProps)(EditablePhotoPanel)


export default EditablePhotoPanelContainer
