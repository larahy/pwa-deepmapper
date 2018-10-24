import { connect } from 'react-redux'
import { filter } from 'lodash'

import {
    fetchPlacecastsRequested,
} from '../../actions/placecasts'
import PlacecastPageView from '../../components/Placecasts/PlacecastPageView'
import {getPlacecasts} from '../../selectors/placecasts'

export const mapStateToProps = (state, ownProps) => {
    const allPlacecasts = getPlacecasts(state)
    const placecast = filter(allPlacecasts, placecast => {
        return JSON.stringify(placecast.id) === ownProps.id
    } )
    if (placecast !== undefined) {
        return {
            placecast: placecast[0],
            currentView: state.placecasts.currentView
        }
    } else {
        return {
            placecast: undefined,
            currentView: state.placecasts.currentView
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
