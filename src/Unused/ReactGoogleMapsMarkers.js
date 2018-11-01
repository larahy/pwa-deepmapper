import React from 'react'
const {
    Marker
} = require('react-google-maps');

export default class ReactGoogleMapsMarkers extends React.Component {

    onMarkerDragEnd = (evt) => {
        const { latLng } = evt;
        const lat = latLng.lat();
        const lng = latLng.lng();
    };
    render() {
        return (
            <div className="marker">
                <Marker
                    draggable={true}
                    onDragEnd={this.onMarkerDragEnd}
                    position={{lat: 40.7565, lng: -73.9543}}
                />
            </div>
        )
    }

}
