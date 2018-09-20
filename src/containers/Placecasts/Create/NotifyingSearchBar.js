import {connect} from 'react-redux'
import {selectPlacecastAddress} from '../../../actions/placecasts/create'
import SearchBar from '../../../components/Search/SearchBar'


export const mapDispatchToProps = dispatch => {
    return {
        onSelectAddress: address => dispatch(selectPlacecastAddress(address))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);
