import {connect} from 'react-redux'
import {updateMyDeepmapperCurrentFeedViewTo} from '../../actions/experts'
import {getMyDeepmapperCurrentFeedView} from '../../selectors/experts'
import MyDeepmapperFeedViewToggle from '../../components/Experts/MyDeepmapperFeedViewToggle'

export const mapStateToProps = (state) => {
    return {
        currentView: getMyDeepmapperCurrentFeedView(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeMyDeepmapperFeedViewTo: (view) => dispatch(updateMyDeepmapperCurrentFeedViewTo(view)),
    };
};

const MyDeepmapperFeedViewToggleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyDeepmapperFeedViewToggle)

export default MyDeepmapperFeedViewToggleContainer


