import { connect } from 'react-redux'
import { filter } from 'lodash'

import {
    fetchPlacecastsRequested,
} from '../../actions/placecasts'
import PlacecastPageView from '../../components/Placecasts/PlacecastPageView'
import {getCurrentView, getPlacecasts} from '../../selectors/placecasts'

export const mapStateToProps = (state, ownProps) => {
    const allPlacecasts = getPlacecasts(state)
    const placecast = filter(allPlacecasts, placecast => {
        return JSON.stringify(placecast.id) === ownProps.id
    } )
    if (placecast !== undefined) {
        return {
            placecast: placecast[0],
            currentView: getCurrentView(state)
        }
    } else {
        return {
            placecast: undefined,
            currentView: getCurrentView(state)
        }
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        getPlacecasts: () => dispatch(fetchPlacecastsRequested()),
    }
}

const PlacecastPageViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacecastPageView)

export default PlacecastPageViewContainer
