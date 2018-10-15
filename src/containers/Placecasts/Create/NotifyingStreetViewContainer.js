import {connect} from 'react-redux'
import StreetView from '../../../components/Placecasts/Create/StreetView'
import {getAddress} from '../../../selectors/create'
import {updatePlacecastCoordinates, addPlacecastPOV} from '../../../actions/placecasts/create'


export const mapStateToProps = (state) => {
    return {
        address: getAddress(state)
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onUpdatePosition: coords => {
            dispatch(updatePlacecastCoordinates(coords))
        },
        onUpdatePOV: preferences => {
            dispatch(addPlacecastPOV(preferences))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StreetView);
