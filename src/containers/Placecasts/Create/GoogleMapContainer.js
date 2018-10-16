import {connect} from 'react-redux'
import {getAddress} from '../../../selectors/create'
import {updatePlacecastCoordinates} from '../../../actions/placecasts/create'
import GoogleMap from '../../../components/Maps/GoogleMap'

export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        address: getAddress(state)
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onUpdatePosition: coords => {
            dispatch(updatePlacecastCoordinates(coords))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
