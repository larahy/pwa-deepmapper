import {connect} from 'react-redux'
import CreateSequenceContinueButton from './CreateSequenceContinueButton'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        isClickable: ownProps.isClickable
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onContinue: () => dispatch(ownProps.onContinue)
    }
}

const CreateSequenceContinueButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateSequenceContinueButton)

export default CreateSequenceContinueButtonContainer
