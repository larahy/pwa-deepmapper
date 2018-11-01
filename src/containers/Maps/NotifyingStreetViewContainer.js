import {connect} from 'react-redux'
import StreetView from '../../components/Maps/StreetView'
import {getAddress} from '../../selectors/create'
import {editAddress} from '../../actions/edit'
import {getIsEditing} from '../../selectors/edit'


export const mapStateToProps = (state) => {
    return {
        address: getAddress(state),
        isEditing: getIsEditing(state)
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onUpdatePosition: coords => {
            dispatch(editAddress(coords))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StreetView);
