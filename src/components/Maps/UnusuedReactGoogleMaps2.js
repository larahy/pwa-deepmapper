import React from 'react';
const { compose, withProps, withStateHandlers } = require('recompose');
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} = require('react-google-maps');

const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');

const StyledMapWithAnInfoBox = compose(
    withProps({
        loadingElement: <div style={{ height: '100%' }} />,
        containerElement: <div style={{ height: '400px' }} />,
        mapElement: <div style={{ height: '100%' }} />,
        center: { lat: 25.03, lng: 121.6 },
    }),
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        })
    }),
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={5}
        defaultCenter={props.center}
    >
        {/*<InfoBox*/}
            {/*options={{ closeBoxURL: '', enableEventPropagation: true }}*/}
        {/*>*/}
            {/*<div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: '12px' }}>*/}
                {/*<div style={{ fontSize: '16px', fontColor: '#08233B' }}>*/}
                    {/*Hello, Taipei!*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</InfoBox>*/}
        <Marker
            position={{ lat: 22.6273, lng: 120.3014 }}
        />
    </GoogleMap>
);

export default class UnusuedReactGoogleMaps2 extends React.PureComponent {
    state = {
        isMarkerShown: true,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <StyledMapWithAnInfoBox />
        )
    }
}



