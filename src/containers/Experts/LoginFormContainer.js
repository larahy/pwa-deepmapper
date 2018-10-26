import { connect } from 'react-redux'
import LoginForm from '../../components/Experts/LoginForm'
import {loginRequested} from '../../actions/session'

export const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch(loginRequested())
    }
}

const LoginFormContainer = connect(
    null,
    mapDispatchToProps
)(LoginForm)

export default LoginFormContainer
