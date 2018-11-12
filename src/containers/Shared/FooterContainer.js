import { connect } from 'react-redux'
import Footer from '../../components/Navigation/Footer'
import {isLoggedIn} from '../../selectors/session'
import {goToCreateThunk, goToHomePageThunk} from '../../actions/navigation'
import {logoutThunk} from '../../actions/session'


export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        isLoggedIn: isLoggedIn(state)
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onGoHome: () => dispatch(goToHomePageThunk()),
        onGoCreate: () => dispatch(goToCreateThunk()),
        onLogout: () => dispatch(logoutThunk()),
    }
}

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)

export default FooterContainer
