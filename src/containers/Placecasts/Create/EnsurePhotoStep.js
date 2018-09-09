import PhotoStep from '../../../components/Placecasts/PhotoStep'
import { connect } from 'react-redux'
import {photoStepCompleted} from '../../../actions/placecasts/create'

export const mapStateToProps = () => {
    return {}
}

export const mapDispatchToProps = dispatch => {
    return {
        onNext: () => dispatch(photoStepCompleted()),
    }
}

const EnsurePhotoStep = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoStep)

export default EnsurePhotoStep
