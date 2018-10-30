import {connect} from 'react-redux'

import {getCurrentView} from '../../selectors/placecasts'
import EditablePlacecast from '../../components/Placecasts/EditblePlacecast'
import {getEditablePlacecast} from '../../selectors/edit'

export const mapStateToProps = (state) => {
    return {
        placecast: getEditablePlacecast(state),
        currentView: getCurrentView(state)
    }
}

export const mapDispatchToProps = () => {
    return {}
}

let EditablePlacecastContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditablePlacecast)


export default EditablePlacecastContainer
