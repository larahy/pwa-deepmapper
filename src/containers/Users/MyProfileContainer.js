import { connect } from 'react-redux'
import MyProfile from '../../components/User/MyProfile'
import {getCurrentUser} from '../../selectors/user'

export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        user: getCurrentUser(state)
    }
}

const MyProfileContainer = connect(
    mapStateToProps,
)(MyProfile)

export default MyProfileContainer
