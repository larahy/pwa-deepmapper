import React, {Fragment} from 'react'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Dependencies, Headers} from '../constants/attributes'
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
import {fetchDependencies} from '../helpers/fetchDependencies'

let MyDeepmapperPage = class extends React.Component {
    static displayName = 'MyDeepmapper'
    static propTypes = {
        currentView: PropTypes.string,
        draftPlacecasts: PropTypes.array,
        publishedPlacecasts: PropTypes.array,
    }

    render() {
        const {currentView, draftPlacecasts, publishedPlacecasts} = this.props

        const publishedPlacecastsElement = currentView === 'published'
            ? <FilterablePlacecastTiles filtered={true} filteredPlacecasts={publishedPlacecasts}/>
            : null
        const draftPlacecastsElement = currentView === 'draft'
            ? <FilterablePlacecastTiles filtered={true} filteredPlacecasts={draftPlacecasts}/>
            : null
        return (
            <Fragment>
                <SimpleHeader title={Headers.MY_DEEPMAPPER}/>
                <div className='home-icons'>
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

MyDeepmapperPage = fetchDependencies([
    Dependencies.PLACECASTS,
    Dependencies.EXPERTS
])(MyDeepmapperPage)

export default connect(mapStateToProps)(MyDeepmapperPage);