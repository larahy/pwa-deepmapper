import React from 'react'
const {
    Marker
} = require('react-google-maps');

export default class ReactGoogleMapsMarkers extends React.Component {
    render() {
        return (
            <div className="marker">
                <Marker
                    position={{lat: 40.756795, lng: -73.954298}}
                />
                <Marker
                    position={{lat: 40.7565, lng: -73.9543}}
                />
            </div>
        )
    }

}
