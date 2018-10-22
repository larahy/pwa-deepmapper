import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import PlacecastViewToggler from '../Navigation/PlacecastViewToggler'
import PhotoPanel from '../Photo/PhotoPanel'
import StaticStreetViewContainer from '../../containers/Placecasts/Create/StaticStreetViewContainer'
import MapContainer from '../../containers/Placecasts/Create/GoogleMapContainer'
import {SimpleHeader} from '../Navigation/SimpleHeader'
import {Headers} from '../../constants/attributes'

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
        const {title, address, audioSrc, photoSrc} = this.props.placecast
        const {currentView} = this.props
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
                <SimpleHeader title={Headers.DEEPMAPPER}/>

                <PlacecastViewToggler />
                <div className="columns is-desktop">
                    <div className='column is-6 is-offset-3'>
                        <div>
                            {photoElement}
                            {streetViewElement}
                            {mapElement}
                        </div>
                        <div className='box'>
                            <audio controls src={audioSrc}></audio>
                        </div>
                        <div>{title}</div>
                        <div>{coordinates}</div>
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
