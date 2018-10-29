import {connect} from 'react-redux'

import IndividualPlacecast from '../../components/Placecasts/IndividualPlacecast'
import {Dependencies} from '../../constants/attributes'
import {fetchDependencies} from '../../helpers/fetchDependencies'
import {getCurrentView, getPlacecasts} from '../../selectors/placecasts'
import {filter} from 'lodash'

export const mapStateToProps = (state, ownProps) => {
    const allPlacecasts = getPlacecasts(state)
    const placecast = filter(allPlacecasts, placecast => {
        return JSON.stringify(placecast.id) === ownProps.id
    } )
    return {
        placecasts: allPlacecasts,
        placecast: placecast[0],
        currentView: getCurrentView(state)
    }
}

export const mapDispatchToProps = () => {
    return {}
}

let IndividualPlacecastContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndividualPlacecast)

IndividualPlacecastContainer = fetchDependencies([
    Dependencies.PLACECASTS,
])(IndividualPlacecastContainer)

export default IndividualPlacecastContainer
