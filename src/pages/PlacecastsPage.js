import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PlacecastFeedContainer from '../containers/Placecasts/PlacecastFeedContainer'
import {fetchPlacecastsRequested} from '../actions/placecasts'

class PlacecastsPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPlacecastsRequested());
    }

    render() {
        const {fetching, error} = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (fetching) {
            return <div>Loading...</div>;
        }

        return (
            <PlacecastFeedContainer />
        );
    }
}

PlacecastsPage.propTypes = {
    fetching: PropTypes.bool,
    error: PropTypes.object,
    dispatch: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        fetching: state.placecasts.fetching,
        error: state.placecasts.error
    };
};

export default connect(mapStateToProps)(PlacecastsPage);

