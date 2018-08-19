import React, {Component} from 'react'
import ReactStreetview from 'react-streetview';

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
        const streetViewPanoramaOptions = {
            position: {lat: 46.9171876, lng: 17.8951832},
            pov: {heading: 100, pitch: 0},
            zoom: 1
        };

        return (
            <div>
                <div style={{
                    width: '800px',
                    height: '450px',
                    backgroundColor: '#eeeeee'
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