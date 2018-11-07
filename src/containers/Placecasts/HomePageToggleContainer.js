import {connect} from 'react-redux'
import {getHomepageCurrentFeedView} from '../../selectors/placecasts'
import {updateHomepageCurrentFeedViewTo} from '../../actions/placecasts'
import HomepageFeedViewToggle from '../../components/Placecasts/HomepageFeedViewToggle'

export const mapStateToProps = (state) => {
    return {
        currentView: getHomepageCurrentFeedView(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeHomepageFeedViewTo: (view) => dispatch(updateHomepageCurrentFeedViewTo(view)),
    };
};

const HomepageFeedViewToggleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomepageFeedViewToggle)

export default HomepageFeedViewToggleContainer


