import { connect } from 'react-redux'
import Footer from '../../components/Navigation/Footer'
import {isLoggedIn} from '../../selectors/session'


export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        isLoggedIn: isLoggedIn(state)
    }
}

const FooterContainer = connect(
    mapStateToProps,
)(Footer)

export default FooterContainer
