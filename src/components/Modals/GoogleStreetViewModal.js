import React from 'react'
import PropTypes from 'prop-types'
import ReactStreetview from 'react-streetview';
import {connect} from 'react-redux'
import {getStreetViewPlacecast} from '../../selectors/placecasts'

/* eslint-disable no-undef */
const googleMapsApiKey = GOOGLE_MAPS_API_KEY
/* eslint-disable no-undef */

class GoogleStreetViewModal extends React.Component {

    render() {
        const {placecast = {} } = this.props
        const {showStreetViewModal} = this.props

        let children = []
        const streetViewPanoramaOptions = {
            position: {lat: placecast.latitude, lng: placecast.longitude},
            pov: {heading: 90, pitch: 0},
            zoom: 0
        };
        const streetView = <div style={{
            width: '800px',
            height: '500px',
        }}>
            <ReactStreetview
                apiKey={googleMapsApiKey}
                streetViewPanoramaOptions={streetViewPanoramaOptions}
                onPositionChanged={position => this.setState({position: position})}
                onPovChanged={pov => this.setState({pov: pov})}
            />
        </div>

        showStreetViewModal ? children = streetView : children
        const modalClasses = showStreetViewModal ? 'modal is-active' : 'modal'

        return (
            <div>
                <div className={modalClasses}>
                    <div className="modal-background" onClick={this.props.closeStreetViewModal}></div>
                    <div className="modal-content">
                        {children}
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={this.props.closeStreetViewModal}>
                    </button>
                </div>
            </div>
        )

    }
}

GoogleStreetViewModal.propTypes = {
    placecast: PropTypes.object,
    showStreetViewModal: PropTypes.bool,
    closeStreetViewModal: PropTypes.func
}

export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        placecast: getStreetViewPlacecast(state),
        showStreetViewModal: state.placecasts.showStreetViewModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeStreetViewModal: () => dispatch({type: 'CLOSE_STREET_VIEW_MODAL'}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleStreetViewModal);


