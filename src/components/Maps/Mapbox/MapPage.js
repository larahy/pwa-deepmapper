/* global window */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import PropTypes from 'prop-types'
import PlacecastPin from './PlacecastPin';
import PlacecastInfo from './PlacecastInfo';
import {getPlacecasts} from '../../../selectors/placecasts'
import {fetchPlacecastsRequested} from '../../../actions/placecasts'
import GoogleStreetViewModal from '../../Modals/GoogleStreetViewModal'
import {SimpleHeader} from '../../Navigation/SimpleHeader'
import {Headers} from '../../../constants/attributes'


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
                zoom: 5.5,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 500,
            },
            popupInfo: null
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchPlacecastsRequested());
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
        const {fetching, error} = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (fetching) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <SimpleHeader title={Headers.DEEPMAPPER}/>
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
                <GoogleStreetViewModal />
            </div>
        );
    }

}

MapPage.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    containerComponent: PropTypes.object,
    placecasts: PropTypes.array,
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    error: PropTypes.object,
}

const mapStateToProps = (state) => {
    return {
        placecasts: getPlacecasts(state),
        fetching: state.placecasts.fetching,
        error: state.placecasts.error
    };
};

export default connect(mapStateToProps)(MapPage);
