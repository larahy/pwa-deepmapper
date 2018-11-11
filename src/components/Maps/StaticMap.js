import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import GoogleMapsWrapper from '../../containers/Maps/GoogleMapsWrapper'
import {GoogleMap, InfoWindow, Marker} from 'react-google-maps'
import PlacecastInfo from './PlacecastInfo'
// import marker from '../../images/marker.png'
/* eslint-disable no-undef */
const googleMapsApiKey = GOOGLE_MAPS_API_KEY

/* eslint-disable no-undef */

class StaticMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openItem: null
        };
    }

    handleOpenItem = item => () => {
        return this.setState({openItem: this.state.openItem === item ? null : item})
    }

    render() {
        const {openItem} = this.state
        const containerElement = <div style={{height: '375px'}}/>
        const mapElement = <div style={{height: '100%'}}/>
        const loadingElement = <div style={{height: '100%'}}/>
        const {placecasts} = this.props

        const infoWindow = openItem ?
            <InfoWindow position={openItem.address} onCloseClick={this.handleOpenItem(openItem)}>
                <PlacecastInfo info={openItem}/>
            </InfoWindow>
            : null

        const marker = {
            path: 'M106.581,61.372c0,19.074-34.539,55.795-34.539,55.795S37.502,80.446,37.502,61.372c0-19.076,15.464-34.539,34.539-34.539  C91.116,26.833,106.581,42.296,106.581,61.372z',
            fillColor: '#FF3B3F',
            fillOpacity: 1,
            scale: 0.1,
        };
        return (
            <Fragment>
                <GoogleMapsWrapper
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={loadingElement}
                    containerElement={containerElement}
                    mapElement={mapElement}>

                    <GoogleMap defaultZoom={12} center={{ lat: 51.507279, lng: -0.146685 }}>
                        {placecasts.map((placecast) => (
                            <Fragment key={placecast.id}>
                                <Marker
                                    onClick={this.handleOpenItem(placecast)}
                                    position={placecast.address}
                                    icon={marker}
                                />
                                {infoWindow}
                            </Fragment>
                        ))}
                    </GoogleMap>

                </GoogleMapsWrapper>
            </Fragment>
        )
    }
}

StaticMap.propTypes = {
    placecasts: PropTypes.array.isRequired,
}

export default StaticMap;