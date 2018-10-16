import { connect } from 'react-redux'
// import {getLoginStatus} from '../../selectors/user'
import Footer from '../../components/Navigation/Footer'


export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    }
}

const FooterContainer = connect(
    mapStateToProps,
)(Footer)

export default FooterContainer
