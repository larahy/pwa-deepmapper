import {getPlacecastErrors, getPlacecasts, isFetchingPlacecasts} from '../../selectors/placecasts'
import {connect} from 'react-redux'
import Mapbox from '../../components/Maps/Mapbox'

const mapStateToProps = (state, ownProps) => {
    return {
        placecasts: ownProps.filteredPlacecasts || getPlacecasts(state),
        fetching: isFetchingPlacecasts(state),
        error: getPlacecastErrors(state),
    };
};

export default connect(mapStateToProps)(Mapbox);
