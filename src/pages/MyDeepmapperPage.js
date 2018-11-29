import React, {Fragment} from 'react'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Dependencies, Headers} from '../constants/attributes'
import FilterablePlacecastTiles from '../containers/Placecasts/FilterablePlacecastsContainer'
import MyDeepmapperFeedViewToggleContainer from '../containers/Experts/MyDeepmapperFeedViewToggleContainer'
import PropTypes from 'prop-types'
import {
    getDraftPlacecastsForLoggedInUser, getHomepageCurrentFeedView,
    getPublishedPlacecastsForLoggedInUser
} from '../selectors/placecasts'
import connect from 'react-redux/es/connect/connect'
import {getMyDeepmapperCurrentFeedView} from '../selectors/experts'
import './pages.scss'
import {fetchDependencies} from '../helpers/fetchDependencies'
import HomepageFeedViewToggleContainer from '../containers/Placecasts/HomePageToggleContainer'
import MapboxContainer from '../containers/Maps/MapboxContainer'


let MyDeepmapperPage = class extends React.Component {
    state = {
        isMenuSticky: false
    }

    static displayName = 'MyDeepmapper'
    static propTypes = {
        currentView: PropTypes.string,
        draftPlacecasts: PropTypes.array,
        publishedPlacecasts: PropTypes.array,
        mapOrList: PropTypes.string
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { isMenuSticky } = this.state;

        if (window.scrollY >= 52 && !isMenuSticky) {
            this.setState({ isMenuSticky: true });
        }

        if (window.scrollY <= 52 && isMenuSticky) {
            this.setState({ isMenuSticky: false });
        }
    }

    render() {
        const { currentView, draftPlacecasts, publishedPlacecasts, mapOrList } = this.props;
        // const { isMenuSticky } = this.state;
        const placecastsList = currentView === 'published'
            ? <FilterablePlacecastTiles filtered={true} filteredPlacecasts={publishedPlacecasts}/>
            : <FilterablePlacecastTiles filtered={true} filteredPlacecasts={draftPlacecasts}/>

        const placecastsMap = currentView === 'published'
            ? <MapboxContainer filteredPlacecasts={publishedPlacecasts}/>
            : <MapboxContainer filteredPlacecasts={draftPlacecasts}/>
        const mainElement = mapOrList === 'list'
            ? placecastsList
            : placecastsMap

        return (
            <Fragment>
                <SimpleHeader title={Headers.MY_DEEPMAPPER}/>
                <HomepageFeedViewToggleContainer/>
                <MyDeepmapperFeedViewToggleContainer/>
                {mainElement}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentView: getMyDeepmapperCurrentFeedView(state),
        mapOrList: getHomepageCurrentFeedView(state),
        publishedPlacecasts: getPublishedPlacecastsForLoggedInUser(state),
        draftPlacecasts: getDraftPlacecastsForLoggedInUser(state)
    };
};

MyDeepmapperPage = fetchDependencies([
    Dependencies.PLACECASTS,
    Dependencies.EXPERTS
])(MyDeepmapperPage)

export default connect(mapStateToProps)(MyDeepmapperPage);