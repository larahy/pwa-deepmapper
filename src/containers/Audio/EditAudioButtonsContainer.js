import {connect} from 'react-redux'
import {
    getDisplayEditAudioButton,
    getDisplaySaveOrCancelAudioButtons,
} from '../../selectors/edit'
import {cancelAudioEdit, updateIsEditingAudio} from '../../actions/edit'
import EditAudioButtons from '../../components/Audio/EditAudioButtons'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        displayEdit:  getDisplayEditAudioButton(state),
        displaySaveOrCancel: getDisplaySaveOrCancelAudioButtons(state)
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEdit: () => dispatch(updateIsEditingAudio()),
        onSave: () => dispatch(ownProps.onSave),
        onCancel: () => dispatch(dispatch(cancelAudioEdit()))
    }
}

const EditAudioButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditAudioButtons)

export default EditAudioButtonsContainer
