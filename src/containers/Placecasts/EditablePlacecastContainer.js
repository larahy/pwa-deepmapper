import {connect} from 'react-redux'
import {getCurrentView} from '../../selectors/placecasts'
import EditablePlacecast from '../../components/Placecasts/EditblePlacecast'
import {updateCurrentViewTo} from '../../actions/placecasts'

export const mapStateToProps = (state) => {
    return {
        currentView: getCurrentView(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeViewTo: (view) => dispatch(updateCurrentViewTo(view)),
    };
};

let EditablePlacecastContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditablePlacecast)


export default EditablePlacecastContainer
