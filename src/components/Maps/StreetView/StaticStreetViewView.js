import React, {Component} from 'react'
import ReactStreetview from 'react-streetview';
import PropTypes from 'prop-types'

/* eslint-disable no-undef */
const googleMapsApiKey = GOOGLE_MAPS_API_KEY
/* eslint-disable no-undef */

export default class StaticStreetViewView extends Component {
    static propTypes = {
        address: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {
            position: null,
            pov: null
        };
    }

    handleUpdatePosition(newPosition) {
        this.setState({
            position: newPosition
        })
    }

    handleUpdatePOV(newPov) {
        this.setState({
            pov: newPov
        })
    }

    render() {
        const {address} = this.props;
        const pitch = address.pitch ? address.pitch : 0
        const heading = address.heading ? address.heading : 0
        const zoom = address.zoom ? address.zoom : 0

        const streetViewPanoramaOptions = {
            position: {lat: address.lat, lng: address.lng},
            pov: {heading: heading, pitch: pitch},
            zoom: zoom
        };

        return (
            <div>
                <div className="street-view-view is-centered">
                    <ReactStreetview
                        apiKey={googleMapsApiKey}
                        streetViewPanoramaOptions={streetViewPanoramaOptions}
                        onPositionChanged={position => this.handleUpdatePosition(position)}
                        onPovChanged={pov => this.handleUpdatePOV(pov)}
                    />
                </div>
            </div>
        );
    }
}