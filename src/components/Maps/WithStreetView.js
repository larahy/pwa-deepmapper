import React from 'react'
import PropTypes from 'prop-types'

const {
    StreetViewPanorama,
    OverlayView,
} = require('react-google-maps');

const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2),
})

export default class WithStreetView extends React.Component {
    render() {
        return (
            <div>
                <StreetViewPanorama defaultPosition={this.props.center} visible>
                    <OverlayView
                        position={{lat: 49.28590291211115, lng: -123.11248166065218}}
                        mapPaneName={OverlayView.OVERLAY_LAYER}
                        getPixelPositionOffset={getPixelPositionOffset}
                    >
                        <div style={{background: 'red', color: 'white', padding: 5, borderRadius: '50%'}}>
                            OverlayView
                        </div>
                    </OverlayView>
                </StreetViewPanorama>
            </div>
        )
    }

}

WithStreetView.propTypes = {
    center: PropTypes.object.isRequired,
}