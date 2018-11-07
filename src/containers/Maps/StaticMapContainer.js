import {connect} from 'react-redux'
import StaticMap from '../../components/Maps/StaticMap'
import {getPublishedPlacecasts} from '../../selectors/placecasts'


export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        placecasts: getPublishedPlacecasts(state),
    }
}

let StaticMapContainer = connect(
    mapStateToProps)(StaticMap)


export default StaticMapContainer


