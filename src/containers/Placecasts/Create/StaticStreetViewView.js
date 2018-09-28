import {connect} from 'react-redux'
import StreetViewView from '../../../components/Placecasts/Create/StreetViewView'
import {getAddress} from '../../../selectors/create'
import {updatePlacecastCoordinates, addPlacecastPOV} from '../../../actions/placecasts/create'


export const mapStateToProps = (state) => {
    return {
        address: getAddress(state)
    }
}

export const mapDispatchToProps = () => {
    return {
        onUpdatePosition: () => {},
        onUpdatePOV:() => {}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StreetViewView);
