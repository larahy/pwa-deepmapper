import React from 'react';
import ReactStreetViewStreetView from '../components/Maps/ReactStreetViewStreetView'
const StreetViewPage = () => (
    <div className='container is-fluid'>
        <div className='card'>
            <div className='card-content'>
                <p className='title'>
                    “Stands the church clock at ten to three?
                    And is there honey still for tea?”
                </p>
                <p className='subtitle'>
                    The Old Vicarage, Grantchester
                    Robert Brooke (1912)
                </p>
            </div>
        </div>
        <div className='map'>
            {/*<ReactGoogleMapsStreetView center={{ lat: 49.2853171, lng: -123.1119202 }} />*/}
            <ReactStreetViewStreetView />
        </div>
    </div>
);

export {StreetViewPage};