import {connect} from 'react-redux'
import {getPublishedPlacecasts} from '../../selectors/placecasts'
import PlacecastTiles from '../../components/Placecasts/PlacecastTiles'
import {getLoggedInUserId} from '../../selectors/session'

export const mapStateToProps = (state, ownProps) => {
    return {
        filtered: ownProps.filtered || false,
        placecasts: getPublishedPlacecasts(state),
        filteredPlacecasts: ownProps.filteredPlacecasts,
        loggedInExpert: getLoggedInUserId(state)
    }
}

export const mapDispatchToProps = () => {
    return {}
}

let FilterablePlacecastTiles = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacecastTiles)



export default FilterablePlacecastTiles
