/* eslint-disable */

import React, {Fragment} from 'react'
import {GoogleMap, withGoogleMap, Marker, Polyline, InfoWindow} from 'react-google-maps'

export default withGoogleMap(props => {
    function handleUpdatePosition(newPosition) {
        const {latLng} = newPosition;
        const lat = latLng.lat();
        const lng = latLng.lng();
        console.log(lat, lng);
        return props.onUpdatePosition({lat, lng})
    }


    const {address} = props
    return (
        <GoogleMap defaultZoom={15} center={address}>
            <Fragment key={address.lng}>
                <Marker
                    position={address}
                    draggable
                    onDragEnd={(event) => handleUpdatePosition(event)}/>
            </Fragment>
        </GoogleMap>
    )
})
