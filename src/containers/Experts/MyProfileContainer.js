import { connect } from 'react-redux'
import MyProfile from '../../components/Experts/MyProfile'
import {getLoggedInExpert} from '../../selectors/experts'

export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        user: getLoggedInExpert(state)
    }
}

const MyProfileContainer = connect(
    mapStateToProps,
)(MyProfile)

export default MyProfileContainer
