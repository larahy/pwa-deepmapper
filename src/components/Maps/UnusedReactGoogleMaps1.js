import React, {Component} from 'react'

const {
    withGoogleMap,
    GoogleMap,
    withScriptjs
} = require('react-google-maps');

/* eslint-disable no-undef */
const googleMapsApiKey = GOOGLE_MAPS_API_KEY
/* eslint-disable no-undef */

import ReactGoogleMapsMarkers from './Markers/ReactGoogleMapsMarkers'

export default class LargeMap extends Component {
    render() {
        const GoogleMapExample = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultCenter={{lat: 40.756795, lng: -73.954298}}
                defaultZoom={13}
            >
                {props.children}
            </GoogleMap>
        ))
        return (
            <div>
                <GoogleMapExample
                    loadingElement={<div style={{height: '100%px'}}/>}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                    containerElement={<div style={{height: '500px', width: '500px'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}>
                    <ReactGoogleMapsMarkers className="marker"/>
                </GoogleMapExample>
            </div>
        );
    }
}