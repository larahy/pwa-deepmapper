import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

import AudioClipPlayback from '../Audio/AudioClipPlayback'
import {openStreetViewModal} from '../../actions/placecasts';


class Placecast extends React.Component {

    render() {
        // const audioSrc = `https://d31dl1irjvblxj.cloudfront.net/${this.props.placecast.s3_audio_filename}`

        return (
            <div>
                <AudioClipPlayback key={this.props.placecast.id} placecast={this.props.placecast}/>
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

