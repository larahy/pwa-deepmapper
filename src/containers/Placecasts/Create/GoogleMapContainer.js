import {connect} from 'react-redux'
import {getAddress} from '../../../selectors/create'
import GoogleMap from '../../../components/Maps/GoogleMap'
import {editAddress} from '../../../actions/edit'

export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        address: ownProps.address || getAddress(state)
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onUpdatePosition: coords => {
            dispatch(editAddress(coords))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
