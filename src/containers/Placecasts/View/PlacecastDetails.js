import { connect } from 'react-redux'
import { filter } from 'lodash'

import {
    fetchPlacecastsRequested,
} from '../../../actions/placecasts'
import PlacecastCardDetail from '../../../components/Placecasts/View/PlacecastCardDetail'
import {getPlacecasts} from '../../../selectors/placecasts'

export const mapStateToProps = (state, ownProps) => {
    const allPlacecasts = getPlacecasts(state)
    const placecast = filter(allPlacecasts, placeast => {
        return JSON.stringify(placeast.id) === ownProps.id
    } )
    if (placecast !== undefined) {
        return {
            placecast: placecast[0],
        }
    } else {
        return {
            placecast: undefined,
        }
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        getPlacecasts: () => dispatch(fetchPlacecastsRequested()),
    }
}

const PlacecastDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacecastCardDetail)

export default PlacecastDetails
