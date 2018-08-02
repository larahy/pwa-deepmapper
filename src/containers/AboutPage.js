import React from 'react';
// import SimpleMap from '../components/Maps/SimpleMap'
// import NotSoSimpleMap from '../components/Maps/NotSoSimpleMap'
import StreetView from '../components/Maps/StreetView'
import LargeMap from '../components/Maps/LargeMap'
const AboutPage = () => (
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
            <LargeMap />
            <StreetView center={{ lat: 49.2853171, lng: -123.1119202 }} />
        </div>
    </div>
);

export {AboutPage};