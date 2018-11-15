/* global window */
import React, {Component} from 'react';
import MapGL, {Marker, NavigationControl} from 'react-map-gl';
import PropTypes from 'prop-types'
import PlacecastPin from './PlacecastPin'
import connect from 'react-redux/es/connect/connect'

/* eslint-disable no-undef */
const mapboxApiToken = MAPBOX_API_TOKEN
/* eslint-disable no-undef */
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

class SingleMapbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: props.address.lat,
                longitude: props.address.lng,
                zoom: 15,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 500
            },
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

    render() {
        const {address} = this.props;
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
                    <Marker longitude={address.lng} latitude={address.lat}>
                        <PlacecastPin size={40} />
                    </Marker>

                    <div className="nav" style={navStyle}>
                        <NavigationControl onViewportChange={this._updateViewport}/>
                    </div>

                </MapGL>
            </div>
        );
    }

}

SingleMapbox.propTypes = {
    address: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
    return {
        address: ownProps.address
    };
};

export default connect(mapStateToProps)(SingleMapbox);