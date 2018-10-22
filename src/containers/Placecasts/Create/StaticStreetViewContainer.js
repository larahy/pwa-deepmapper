import {connect} from 'react-redux'
import StreetView from '../../../components/Placecasts/Create/StreetView'
import {getAddress} from '../../../selectors/create'

export const mapStateToProps = (state, ownProps) => {
    return {
        address: ownProps.address || getAddress(state)
    }
}

export const mapDispatchToProps = () => {
    return {
        onUpdatePosition: () => {},
        onUpdatePOV:() => {}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StreetView);
