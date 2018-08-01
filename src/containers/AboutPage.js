import React from 'react';
import SimpleMap from '../components/Maps/SimpleMap'

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
            <SimpleMap />
        </div>
    </div>
);

export {AboutPage};