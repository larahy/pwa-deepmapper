/* eslint-disable */
import {withScriptjs, withGoogleMap} from "react-google-maps"

export const GeoCoder = withScriptjs(withGoogleMap((props) => {

    let geocoder = new google.maps.Geocoder();
    let latlng = {lat: props.address.lat, lng: props.address.lng}
    if (geocoder) {
        geocoder.geocode({'location': latlng}, function (results, status) {
            console.log('results', results);
            console.log('status', status);

        });
    }


}))

/**
 * const address ={lat: 51.5077576, lng: -0.12792460000002848}
 * <GeoCoder
 isMarkerShown
 address={address}
 googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`}
 loadingElement={<div style={{height: '100%'}}/>}
 containerElement={<div style={{height: '400px'}}/>}
 mapElement={<div style={{height: '100%'}}/>}
 /> **/