import {getPlacecastErrors, getPlacecasts, isFetchingPlacecasts} from '../../selectors/placecasts'
import {connect} from 'react-redux'
import Mapbox from '../../components/Maps/Mapbox'

const mapStateToProps = (state) => {
    return {
        placecasts: getPlacecasts(state),
        fetching: isFetchingPlacecasts(state),
        error: getPlacecastErrors(state)
    };
};

export default connect(mapStateToProps)(Mapbox);
