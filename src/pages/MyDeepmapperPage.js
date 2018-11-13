import React, {Fragment} from 'react'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Headers} from '../constants/attributes'
import FilterablePlacecastTiles from '../containers/Placecasts/FilterablePlacecastsContainer'
import MyDeepmapperFeedViewToggleContainer from '../containers/Experts/MyDeepmapperFeedViewToggleContainer'
import PropTypes from 'prop-types'
import {
    getDraftPlacecastsForLoggedInUser,
    getPublishedPlacecastsForLoggedInUser
} from '../selectors/placecasts'
import connect from 'react-redux/es/connect/connect'
import {getMyDeepmapperCurrentFeedView} from '../selectors/experts'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faListUl, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './pages.scss'

class MyDeepmapperPage extends React.Component {
    state = {
        isMenuSticky: false
    }

    static propTypes = {
        currentView: PropTypes.string,
        draftPlacecasts: PropTypes.array,
        publishedPlacecasts: PropTypes.array,
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
        const { currentView, draftPlacecasts, publishedPlacecasts } = this.props;
        const { isMenuSticky } = this.state;

        const publishedPlacecastsElement = currentView === 'published'
            ? <FilterablePlacecastTiles filtered={true} filteredPlacecasts={publishedPlacecasts}/>
            : null
        const draftPlacecastsElement = currentView === 'draft'
            ? <FilterablePlacecastTiles filtered={true} filteredPlacecasts={draftPlacecasts}/>
            : null
        return (
            <Fragment>
                <SimpleHeader title={Headers.MY_DEEPMAPPER}/>
                <div className={`home-icons ${isMenuSticky ? 'sticky-home-icons' : ''}`}>
                    <div className='list-icon'>
                        <span><FontAwesomeIcon icon={faListUl}/></span>
                    </div>
                    <div className='map-icon'>
                        <span><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                    </div>
                </div>
                <MyDeepmapperFeedViewToggleContainer/>
                {publishedPlacecastsElement}
                {draftPlacecastsElement}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentView: getMyDeepmapperCurrentFeedView(state),
        publishedPlacecasts: getPublishedPlacecastsForLoggedInUser(state),
        draftPlacecasts: getDraftPlacecastsForLoggedInUser(state)
    };
};


export default connect(mapStateToProps)(MyDeepmapperPage);