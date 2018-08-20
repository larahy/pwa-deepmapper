import React from 'react';
import SimpleMap from '../components/Maps/GoogleMapReact/SimpleMap'
// import LargeMap from '../components/Maps/LargeMap'
// import NotSoSimpleMap from '../components/Maps/NotSoSimpleMap'
const HomePage = () => (
    <div className='container is-fluid'>
        <div className='map'>
            <SimpleMap />
        </div>
    </div>
);


export {HomePage};