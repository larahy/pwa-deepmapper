/* global window */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import PropTypes from 'prop-types'
import ControlPanel from './ControlPanel';
import CityPin from './CityPin';
import CityInfo from './CityInfo';
import {getPlacecasts} from '../../../selectors/placecasts'

/* eslint-disable no-undef */
const mapboxApiToken = MAPBOX_API_TOKEN
/* eslint-disable no-undef */
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

class MapPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 51.5675,
                longitude: 0,
                zoom: 9.5,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 500,
            },
            popupInfo: null
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this._resize);
        this._resize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._resize);
    }

    _resize = () => {
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: this.props.width || window.innerWidth,
                height: this.props.height || window.innerHeight
            }
        });
    };

    _updateViewport = (viewport) => {
        this.setState({viewport});
    }

    _renderCityMarker = (placecast, index) => {
        return (
            <Marker key={`marker-${index}`} longitude={placecast.longitude} latitude={placecast.latitude}>
                <CityPin size={20} onClick={() => this.setState({popupInfo: placecast})}/>
            </Marker>
        );
    }

    _renderPopup() {
        const {popupInfo} = this.state;

        return popupInfo && (
            <Popup tipSize={5} anchor="top" longitude={popupInfo.longitude} latitude={popupInfo.latitude} onClose={() => this.setState({popupInfo: null})}>
                <CityInfo info={popupInfo}/>
            </Popup>
        );
    }

    render() {
        const {placecasts = []} = this.props;
        const {viewport} = this.state;

        return (
            <MapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={this._updateViewport}
                mapboxApiAccessToken={mapboxApiToken}>

                {placecasts.map(this._renderCityMarker)}
                {/*<ul>{CITIES.map((city, i) => <li key={i}>{city.city}</li>)}</ul>*/}
                {this._renderPopup()}

                <div className="nav" style={navStyle}>
                    <NavigationControl onViewportChange={this._updateViewport}/>
                </div>

                <ControlPanel containerComponent={this.props.containerComponent}/>

            </MapGL>
        );
    }

}

MapPage.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    containerComponent: PropTypes.object,
    placecasts: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        placecasts: getPlacecasts(state),
    };
};

export default connect(mapStateToProps)(MapPage);
