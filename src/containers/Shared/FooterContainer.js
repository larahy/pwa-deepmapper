import { connect } from 'react-redux'
import Footer from '../../components/Navigation/Footer'
import {isLoggedIn} from '../../selectors/session'
import {goToHomePageThunk} from '../../actions/navigation'


export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        isLoggedIn: isLoggedIn(state)
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onGoHome: () => dispatch(goToHomePageThunk()),
    }
}

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)

export default FooterContainer
