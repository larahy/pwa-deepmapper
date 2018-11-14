import {connect} from 'react-redux'
import {
    getDisplayBinButton,
    getDisplayEditVisualsButton,
} from '../../selectors/edit'
import {updateIsEditing} from '../../actions/edit'
import EditPhotoButtons from '../../components/Placecasts/EditPhotoButtons'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        displayEdit:  getDisplayEditVisualsButton(state),
        displayBin: getDisplayBinButton(state),
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEdit: () => dispatch(updateIsEditing()),
        onCancel: () => dispatch(ownProps.onCancel)
    }
}

const EditVisualsButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPhotoButtons)

export default EditVisualsButtonsContainer
