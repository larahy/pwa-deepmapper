import React, {Component} from 'react'

const {
    withGoogleMap,
    GoogleMap,
} = require('react-google-maps');
import Markers from './Markers'

export default class LargeMap extends Component {
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{lat: 40.756795, lng: -73.954298}}
                defaultZoom={13}
            >
                {props.children}
            </GoogleMap>
        ));
        return (
            <div>
                <GoogleMapExample
                    containerElement={<div style={{height: '500px', width: '500px'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}>
                    <Markers/>
                </GoogleMapExample>
            </div>
        );
    }
}