import { connect } from 'react-redux'
import {becomeADeepmapperRequested} from '../../actions/user'
import BecomeADeepmapperForm from '../../components/User/BecomeADeepmapperForm'

export const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch(becomeADeepmapperRequested())
    }
}

const BecomeADeepmapperFormContainer = connect(
    null,
    mapDispatchToProps
)(BecomeADeepmapperForm)

export default BecomeADeepmapperFormContainer
