/* eslint-disable */

import React, {Fragment} from 'react'
import {GoogleMap, withGoogleMap, Marker} from 'react-google-maps'

export default withGoogleMap(props => {
    function handleUpdatePosition(newPosition) {
        const {latLng} = newPosition;
        const lat = latLng.lat();
        const lng = latLng.lng();
        return props.onUpdatePosition({lat, lng})
    }


    const {address, isDraggable} = props
    return (
        <GoogleMap defaultZoom={15} center={address}>
            <Fragment key={address.lng}>
                <Marker
                    position={address}
                    draggable={isDraggable}
                    onDragEnd={(event) => handleUpdatePosition(event)}/>
            </Fragment>
        </GoogleMap>
    )
})
