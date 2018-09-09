import StepHeader from '../../../components/Placecasts/StepHeader'
import {connect} from 'react-redux'
import {photoSkipped} from '../../../actions/placecasts/create'

export const mapStateToProps = (_, ownProps) => {
    return ownProps
}

export const mapDispatchToProps = dispatch => {
    return {
        onSkip: () => dispatch(photoSkipped())
    }
}

const SkippableStepHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(StepHeader)

export default SkippableStepHeader
