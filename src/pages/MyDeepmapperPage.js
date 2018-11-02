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

class MyDeepmapperPage extends React.Component {
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