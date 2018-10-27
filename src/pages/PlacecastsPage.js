import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash'
import PlacecastFeedContainer from '../containers/Placecasts/PlacecastFeedContainer'
import {fetchPlacecastsRequested} from '../actions/placecasts'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Headers} from '../constants/attributes'
import {getPlacecastErrors, isFetchingPlacecasts} from '../selectors/placecasts'

class PlacecastsPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPlacecastsRequested());
    }

    render() {
        const {fetching, error} = this.props;

        if (!isEmpty(error)) {
            return <div>Error! {error.message}</div>;
        }

        if (fetching) {
            return <div>Loading...</div>;
        }

        return (
            <Fragment>
                <SimpleHeader title={Headers.DEEPMAPPER}/>
                <PlacecastFeedContainer/>
            </Fragment>
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
        fetching: isFetchingPlacecasts(state),
        error: getPlacecastErrors(state)
    };
};

export default connect(mapStateToProps)(PlacecastsPage);

