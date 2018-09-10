import StepHeader from '../../../components/Placecasts/StepHeader'
import {connect} from 'react-redux'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
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
