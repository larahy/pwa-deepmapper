import React, {Component} from 'react'
import PropTypes from 'prop-types'

const {
    withGoogleMap,
    withScriptjs,
    GoogleMap
} = require('react-google-maps');
import WithStreetView from './WithStreetView'
/* eslint-disable no-undef */
const googleMapsApiKey = GOOGLE_MAPS_API_KEY
/* eslint-disable no-undef */


export default class ReactGoogleMapsStreetView extends Component {
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
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                    containerElement={<div style={{height: '500px', width: '500px'}}/>}
                    loadingElement={<div style={{height: '100%px'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}>
                    <WithStreetView center={this.props.center}/>

                </GoogleMapExample>
            </div>
        );
    }
}

ReactGoogleMapsStreetView.propTypes = {
    center: PropTypes.object.isRequired,
}