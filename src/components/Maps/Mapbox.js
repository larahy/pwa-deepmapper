/* global window */
import React, {Component} from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import PropTypes from 'prop-types'
import PlacecastInfo from '../../components/Maps/PlacecastInfo';
import PlacecastPin from './PlacecastPin'

/* eslint-disable no-undef */
const mapboxApiToken = MAPBOX_API_TOKEN
/* eslint-disable no-undef */
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

export default class Mapbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 51.507279,
                longitude: -0.146685,
                zoom: 12,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 500
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
            <Marker key={`marker-${index}`} longitude={placecast.address.lng} latitude={placecast.address.lat}>
                <PlacecastPin size={40} onClick={() => this.setState({popupInfo: placecast})}/>
            </Marker>
        );
    }

    _renderPopup() {
        const {popupInfo} = this.state;

        return popupInfo && (
            <Popup tipSize={5} anchor="top" longitude={popupInfo.address.lng} latitude={popupInfo.address.lat} closeOnClick={false} onClose={() => this.setState({popupInfo: null})}>
                <PlacecastInfo info={popupInfo}/>
            </Popup>
        );
    }

    render() {
        const {placecasts = []} = this.props;
        const {viewport} = this.state;
        const {fetching} = this.props;

        if (fetching) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <MapGL
                    {...viewport}
                    mapStyle="mapbox://styles/larahy/cjms4f3saa8rt2smznqkpiia3"
                    onViewportChange={this._updateViewport}
                    mapboxApiAccessToken={mapboxApiToken}>

                    {placecasts.map(this._renderCityMarker)}
                    {this._renderPopup()}

                    <div className="nav" style={navStyle}>
                        <NavigationControl onViewportChange={this._updateViewport}/>
                    </div>

                </MapGL>
            </div>
        );
    }

}

Mapbox.propTypes = {
    placecasts: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.object,
}