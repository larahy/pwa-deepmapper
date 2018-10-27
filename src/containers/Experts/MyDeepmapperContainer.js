import { connect } from 'react-redux'
import MyDeepmapper from '../../components/Experts/MyDeepmapper'
import {getLoggedInExpert} from '../../selectors/experts'

export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        user: getLoggedInExpert(state)
    }
}

const MyDeepmapperContainer = connect(
    mapStateToProps,
)(MyDeepmapper)

export default MyDeepmapperContainer
