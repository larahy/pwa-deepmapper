import {connect} from 'react-redux'
import {
    isReadyToSubmit,
} from '../../../selectors/create'
import StepHeader from '../../../components/Placecasts/Create/StepHeader'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        readyToSubmit: isReadyToSubmit(state)
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSkip: () => dispatch(ownProps.onSkip),
        onNext: () => dispatch(ownProps.onNext)
    }
}

const SkippableStepHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(StepHeader)

export default SkippableStepHeader
