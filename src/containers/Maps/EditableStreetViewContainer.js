import {connect} from 'react-redux'
import {getIsEditing, getNewAddress} from '../../selectors/edit'
import EditableStreetView from '../../components/Maps/EditableStreetView'

export const mapStateToProps = (state) => {
    return {
        newAddress: getNewAddress(state),
        isEditing: getIsEditing(state)
    }
}

let EditableStreetViewContainer = connect(
    mapStateToProps)(EditableStreetView)


export default EditableStreetViewContainer
