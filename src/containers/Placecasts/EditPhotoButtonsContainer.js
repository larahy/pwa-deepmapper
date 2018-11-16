import {connect} from 'react-redux'
import {
    getDisplayBinButton, getDisplayEditPhotoButton,
} from '../../selectors/edit'
import {cancelPhotoEdit, updateIsEditingPhoto} from '../../actions/edit'
import EditPhotoButtons from '../../components/Placecasts/EditPhotoButtons'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        displayEdit:  getDisplayEditPhotoButton(state),
        displayBin: getDisplayBinButton(state),
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onEdit: () => dispatch(updateIsEditingPhoto()),
        onCancel: () => dispatch(cancelPhotoEdit())
    }
}

const EditPhotoButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPhotoButtons)

export default EditPhotoButtonsContainer
