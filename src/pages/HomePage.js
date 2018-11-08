import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import FilterablePlacecastTiles from '../containers/Placecasts/FilterablePlacecastsContainer'
import {fetchDependencies} from '../helpers/fetchDependencies'
import {Dependencies, Headers} from '../constants/attributes'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import './pages.scss'
import HomepageFeedViewToggleContainer from '../containers/Placecasts/HomePageToggleContainer'
import {getHomepageCurrentFeedView,} from '../selectors/placecasts'
import StaticMapContainer from '../containers/Maps/StaticMapContainer'

let HomePage = class extends React.Component {
    static displayName = 'Home'
    static propTypes = {
        currentView: PropTypes.string,
    }

    render() {
        const {currentView} = this.props

        const mainElement = currentView === 'list'
            ? <FilterablePlacecastTiles/>
            : <StaticMapContainer />
        return (
            <Fragment>
                <SimpleHeader title={Headers.DEEPMAPPER}/>
                <HomepageFeedViewToggleContainer/>
                {mainElement}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentView: getHomepageCurrentFeedView(state),
    };
};

HomePage = fetchDependencies([
    Dependencies.PLACECASTS,
    Dependencies.EXPERTS
])(HomePage)

export default connect(mapStateToProps)(HomePage)
