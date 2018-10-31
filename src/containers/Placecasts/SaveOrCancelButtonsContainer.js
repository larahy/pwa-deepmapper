import {connect} from 'react-redux'
import SaveOrCancelButtons from '../../components/Placecasts/SaveOrCancelButtons'
import {getDisplaySaveOrCancelButtons} from '../../selectors/edit'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        displaySelf: getDisplaySaveOrCancelButtons(state)
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSave: () => dispatch(ownProps.onSave),
        onCancel: () => dispatch(ownProps.onCancel)
    }
}

const SaveOrCancelButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SaveOrCancelButtons)

export default SaveOrCancelButtonsContainer
