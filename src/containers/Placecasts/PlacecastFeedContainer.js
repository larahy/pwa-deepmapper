import { connect } from 'react-redux'
import {getPlacecasts} from '../../selectors/placecasts'
import {fetchPlacecastsRequested} from '../../actions/placecasts'
import PlacecastsFeed from '../../components/Placecasts/PlacecastsFeed'


const mapStateToProps = (state) => {
    return {
        placecasts: getPlacecasts(state),
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        getPlacecasts: () => dispatch(fetchPlacecastsRequested()),
    }
}

const PlacecastFeedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacecastsFeed)

export default PlacecastFeedContainer
