import React, {Component, Fragment} from 'react';
import SearchBar from '../../containers/Maps/NotifyingSearchBar'
import UpdatableInfoFields from '../../containers/Placecasts/UpdatableInfoFields'
import GoogleMapsWrapper from '../../containers/Maps/GoogleMapsWrapper'
/* eslint-disable no-undef */
const googleMapsApiKey = GOOGLE_MAPS_API_KEY
/* eslint-disable no-undef */

export default class TitleAndSearchBar extends Component {

    render() {
        return (
            <Fragment>
                <GoogleMapsWrapper
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '100%'}}/>}
                    mapElement={<span style={{display: 'none'}}/>}>
                    <UpdatableInfoFields/>
                    <SearchBar/>
                </GoogleMapsWrapper>
            </Fragment>
        )
    }
}


