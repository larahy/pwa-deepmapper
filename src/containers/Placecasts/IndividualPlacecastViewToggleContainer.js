import {connect} from 'react-redux'
import {getCurrentView} from '../../selectors/placecasts'
import {updateCurrentViewTo} from '../../actions/placecasts'
import IndividualPlacecastViewToggle from '../../components/Placecasts/IndividualPlacecastViewToggle'

const mapStateToProps = (state) => {
    return {
        currentView: getCurrentView(state)
    };
};
const mapDispatchToProps = dispatch => {
    return {
        changeViewTo: (view) => dispatch(updateCurrentViewTo(view)),
    };
};


const IndividualPlacecastViewToggleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndividualPlacecastViewToggle)

export default IndividualPlacecastViewToggleContainer


