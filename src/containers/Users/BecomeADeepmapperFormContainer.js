import { connect } from 'react-redux'
import BecomeADeepmapperForm from '../../components/User/BecomeADeepmapperForm'
import {becomeAnExpertRequested} from '../../actions/experts'

export const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch(becomeAnExpertRequested())
    }
}

const BecomeADeepmapperFormContainer = connect(
    null,
    mapDispatchToProps
)(BecomeADeepmapperForm)

export default BecomeADeepmapperFormContainer
