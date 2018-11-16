import {connect} from 'react-redux'
import {
    getDisplayAudioBinButton,
    getDisplayEditAudioButton,
} from '../../selectors/edit'
import {cancelAudioEdit, updateIsEditingAudio} from '../../actions/edit'
import EditAudioButtons from '../../components/Audio/EditAudioButtons'

export const mapStateToProps = (state) => {
    return  {
        displayEdit:  getDisplayEditAudioButton(state),
        displayBin: getDisplayAudioBinButton(state),
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onEdit: () => dispatch(updateIsEditingAudio()),
        onCancel: () => dispatch(cancelAudioEdit())
    }
}

const EditAudioButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditAudioButtons)

export default EditAudioButtonsContainer
