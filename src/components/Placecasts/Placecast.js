import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux';

import AudioClipPlayback from '../Audio/AudioClipPlayback'
import {openStreetViewModal} from '../../actions/placecasts';
import {Link} from 'react-router-dom'


class Placecast extends React.Component {

    render() {
        // const audioSrc = `https://d31dl1irjvblxj.cloudfront.net/${this.props.placecast.s3_audio_filename}`
        const linkToPlacecast = `placecasts/${this.props.placecast.id}`

        return (
            <div>
                <Link to={linkToPlacecast}>
                    <AudioClipPlayback key={this.props.placecast.id} placecast={this.props.placecast}/>
                </Link>
            </div>
        )

    }
}

Placecast.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(Placecast);

