import {connect} from 'react-redux'
import {selectPlacecastAddress} from '../../actions/create2'
import SearchBar from '../../components/Maps/Search/SearchBar'

export const mapDispatchToProps = dispatch => {
    return {
        onSelectAddress: address => dispatch(selectPlacecastAddress(address))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);
