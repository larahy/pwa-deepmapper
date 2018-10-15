import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import PlacecastViewToggler from '../Navigation/PlacecastViewToggler'
import PhotoPanel from '../Photo/PhotoPanel'
import PlaybackPanelContainer from '../../containers/Placecasts/Create/PlaybackPanelContainer'
import StaticStreetViewContainer from '../../containers/Placecasts/Create/StaticStreetViewContainer'
import MapContainer from '../../containers/Placecasts/Create/MapContainer'

export default class PlacecastPageView extends React.Component {
    static propTypes = {
        placecast: PropTypes.object,
        getPlacecasts: PropTypes.func,
        currentView: PropTypes.string
    }
    static defaultProps = {
        getPlacecasts: () => {
        },
    }

    render() {
        const {title, id, address, audioSrc, photoSrc, currentView} = this.props.placecast
        const playbackElement = <PlaybackPanelContainer src={audioSrc}/>
        const coordinates = `[ ${address.lat} , ${address.lng} ]`
        const streetViewElement = currentView === 'street-view' ? <StaticStreetViewContainer address={address}/> : null
        const photoElement = currentView === 'photo' ? <PhotoPanel sourceUrl={photoSrc}/> : null
        const mapElement = currentView === 'map' ?
            <MapContainer
                isDraggable={false}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
            : null
        return (
            <Fragment>

                <PlacecastViewToggler />
                <div className="columns is-desktop">
                    <div className='column is-6 is-offset-3'>
                        <div className='review-panel'>
                            {photoElement}
                            {streetViewElement}
                            {mapElement}
                        </div>
                        {playbackElement}
                        <div>{title}</div>
                        <div>{id}</div>
                        <div className='steps-container is-primary'>
                            {coordinates}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    UNSAFE_componentWillMount() {
        if (this.props.placecast === undefined) {
            this.props.getPlacecasts()
        }
    }
}
