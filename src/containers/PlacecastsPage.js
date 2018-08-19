import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Placecasts from '../components/Placecasts/Placecasts'
import {fetchPlacecastsRequested} from '../actions/placecasts'

class PlacecastsPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPlacecastsRequested());
    }

    render() {
        const {fetching, placecasts, error} = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (fetching) {
            return <div>Loading...</div>;
        }

        return (
            <Placecasts placecasts={placecasts}/>
        );
    }
}

PlacecastsPage.propTypes = {
    fetching: PropTypes.bool,
    placecasts: PropTypes.array,
    error: PropTypes.object,
    dispatch: PropTypes.func
}

const mapStateToProps = ({placecasts}) => {
    return {
        fetching: placecasts.fetching,
        placecasts: placecasts.items,
        error: placecasts.error
    };
};

export default connect(mapStateToProps)(PlacecastsPage);

