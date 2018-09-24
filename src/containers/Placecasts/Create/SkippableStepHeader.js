import {connect} from 'react-redux'
import {
    isReadyToSubmitInfo,
} from '../../../selectors/create'
import StepHeader from '../../../components/Placecasts/Create/StepHeader'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        readyToSubmitInfo: isReadyToSubmitInfo(state),
        loading: state.s3.uploadProcessing,
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
