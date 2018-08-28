import React, {Component} from 'react'
import ReactStreetview from 'react-streetview';
import PropTypes from 'prop-types'

/* eslint-disable no-undef */
const googleMapsApiKey = GOOGLE_MAPS_API_KEY
/* eslint-disable no-undef */

export default class ReactStreetViewStreetView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: null,
            pov: null
        };
    }


    render() {
        const {placecast} = this.props;

        const streetViewPanoramaOptions = {
            position: {lat: placecast.latitude, lng: placecast.longitude},
            pov: {heading: 90, pitch: 0},
            zoom: 0
        };

        return (
            <div>
                <div style={{
                    width: '450px',
                    height: '300px',
                }}>
                    <ReactStreetview
                        apiKey={googleMapsApiKey}
                        streetViewPanoramaOptions={streetViewPanoramaOptions}
                        onPositionChanged={position => this.setState({position: position})}
                        onPovChanged={pov => this.setState({pov: pov})}
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

ReactStreetViewStreetView.propTypes = {
    placecast: PropTypes.object.isRequired,
}