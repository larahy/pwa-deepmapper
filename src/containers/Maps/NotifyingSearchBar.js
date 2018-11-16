import {connect} from 'react-redux'
import {selectPlacecastAddress} from '../../actions/create2'
import SearchBar from '../../components/Maps/Search/SearchBar'
import {getAddress} from '../../selectors/create'
import {isEmpty} from 'lodash'
export const mapStateToProps = state => {
    return {
        hasPreviousAddress: !isEmpty(getAddress(state))
    }
}
export const mapDispatchToProps = dispatch => {
    return {
        onSelectAddress: address => dispatch(selectPlacecastAddress(address))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
