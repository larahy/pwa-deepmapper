import {connect} from 'react-redux'
import {getEditablePhotoSrc, getIsEditing, getNewPhotoFile} from '../../selectors/edit'
import EditablePhotoPanel from '../../components/Photo/EditablePhotoPanel'

export const mapStateToProps = (state) => {
    return {
        originalSourceUrl: getEditablePhotoSrc(state),
        newPhotoFile: getNewPhotoFile(state),
        isEditing: getIsEditing(state)
    }
}

let EditablePhotoPanelContainer = connect(
    mapStateToProps)(EditablePhotoPanel)


export default EditablePhotoPanelContainer
