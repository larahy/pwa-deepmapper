import {connect} from 'react-redux'
import {
    getDisplayEditVisualsButton, getDisplaySaveOrCancelButtons,
} from '../../selectors/edit'
import {updateIsEditing} from '../../actions/edit'
import EditVisualsButtons from '../../components/Placecasts/EditVisualsButtons'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        displayEdit:  getDisplayEditVisualsButton(state),
        displaySave: getDisplaySaveOrCancelButtons(state)
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEdit: () => dispatch(updateIsEditing()),
        onSave: () => dispatch(ownProps.onSave),
        onCancel: () => dispatch(ownProps.onCancel)
    }
}

const EditVisualsButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditVisualsButtons)

export default EditVisualsButtonsContainer
