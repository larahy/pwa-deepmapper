import { connect } from 'react-redux'

import { fetchDependencies } from '../helpers/fetchDependencies'
import { Dependencies } from '../constants/attributes'
import {getPlacecasts} from '../selectors/placecasts'
import PlacecastTiles from '../components/Placecasts/PlacecastTiles'

export const mapStateToProps = state => {
    return {
        placecasts: getPlacecasts(state),
    }
}

export const mapDispatchToProps = () => {
    return {}
}

let FilterablePlacecastTiles = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacecastTiles)

FilterablePlacecastTiles = fetchDependencies([
    Dependencies.PLACECASTS,
    // Dependencies.FETCH_EXPERTS
])(FilterablePlacecastTiles)

export default FilterablePlacecastTiles
