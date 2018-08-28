import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

import AudioClipPlayback from '../Audio/AudioClipPlayback'
import {openStreetViewModal} from '../../actions/placecasts';


class Placecast extends React.Component {

    render() {

        return (<div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                </figure>
            </div>
            <div className="card-content">
                <AudioClipPlayback
                    key={this.props.placecast.id}
                    placecast={this.props.placecast}/>
                <p>{this.props.placecast.subtitle}</p>
                <a
                    className='is-primary is-large modal-button'
                    onClick={() => this.props.openStreetViewModal(this.props.placecast.id)}>
                    Launch StreetView
                </a>
            </div>
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
        openStreetViewModal: (id) =>  {
            dispatch(openStreetViewModal(id))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Placecast);

