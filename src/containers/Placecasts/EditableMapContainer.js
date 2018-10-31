import {connect} from 'react-redux'
import {getIsEditing, getNewAddress} from '../../selectors/edit'
import EditableMap from '../../components/Maps/EditableMap'

export const mapStateToProps = (state) => {
    return {
        newAddress: getNewAddress(state),
        isEditing: getIsEditing(state)
    }
}

let EditableMapContainer = connect(
    mapStateToProps)(EditableMap)


export default EditableMapContainer
