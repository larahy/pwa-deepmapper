import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {openStreetViewModal} from '../../actions/placecasts';
import {Link} from 'react-router-dom'
import PlaybackPanel2 from '../Audio/PlaybackPanel2'


class PlacecastFeedView extends React.Component {

    render() {
        const linkToPlacecast = `placecasts/${this.props.placecast.id}`

        return (
            <div>
                <Link to={linkToPlacecast}>
                    <PlaybackPanel2 key={this.props.placecast.id} placecast={this.props.placecast}/>
                </Link>
            </div>
        )

    }
}

PlacecastFeedView.propTypes = {
    placecast: PropTypes.object.isRequired,
    openStreetViewModal: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openStreetViewModal: (id) => {
            dispatch(openStreetViewModal(id))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlacecastFeedView);

