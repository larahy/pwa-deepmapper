import React from 'react';
import ReactStreetViewStreetView from '../Maps/ReactStreetViewStreetView'

const StreetViewPage = () => (
    <div>
        {/*<ReactGoogleMapsStreetView center={{ lat, lng: -123.1119202 }} />*/}
        <ReactStreetViewStreetView placecast={{latitude: 51.5675, longitude: -0.1483}}/>
    </div>
);

export {StreetViewPage};