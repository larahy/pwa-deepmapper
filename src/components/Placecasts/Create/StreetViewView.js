import React, {Component} from 'react'
import ReactStreetview from 'react-streetview';
import PropTypes from 'prop-types'

/* eslint-disable no-undef */
const googleMapsApiKey = GOOGLE_MAPS_API_KEY
/* eslint-disable no-undef */

export default class StreetViewStreetView extends Component {
    static propTypes = {
        onUpdatePosition: PropTypes.func,
        onUpdatePOV: PropTypes.func,
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
        return this.props.onUpdatePosition({lat: this.state.position.lat(), lng: this.state.position.lng()})
    }

    handleUpdatePOV(newPov) {
        this.setState({
            pov: newPov
        })
        return this.props.onUpdatePOV({pitch: this.state.pov.pitch, heading: this.state.pov.heading, zoom: this.state.pov.zoom})
    }

    render() {
        const {address} = this.props;

        const streetViewPanoramaOptions = {
            position: {lat: address.lat, lng: address.lng},
            pov: {heading: 90, pitch: 0},
            zoom: 0
        };

        return (
            <div>
                <div className="street-view-view">
                    <ReactStreetview
                        apiKey={googleMapsApiKey}
                        streetViewPanoramaOptions={streetViewPanoramaOptions}
                        onPositionChanged={position => this.handleUpdatePosition(position)}
                        onPovChanged={pov => this.handleUpdatePOV(pov)}
                    />
                </div>
                <div className='helper'>
                    Position: {JSON.stringify(this.state.position)}<br/>
                    Pov: {JSON.stringify(this.state.pov)}
                </div>
            </div>
        );
    }
}