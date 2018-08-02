import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types'

const AnyReactComponent = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

AnyReactComponent.propTypes = {
    text: PropTypes.string
}

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 51.4723,
            lng: -0.187682
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'INSERT KEY' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={51.4723}
                        lng={-0.187682}
                        text={'Deepmapper HQ'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

SimpleMap.propTypes = {
    center: PropTypes.object,
    zoom: PropTypes.number
}

export default SimpleMap;