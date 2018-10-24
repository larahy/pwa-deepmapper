import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import PlacecastViewToggler from '../Navigation/PlacecastViewToggler'
import PhotoPanel from '../Photo/PhotoPanel'
import StaticStreetViewContainer from '../../containers/Placecasts/Create/StaticStreetViewContainer'
import MapContainer from '../../containers/Placecasts/Create/GoogleMapContainer'
import {SimpleHeader} from '../Navigation/SimpleHeader'
import {Headers} from '../../constants/attributes'
import ExpertProfileContainer from '../../containers/Users/ExpertProfileContainer'
import GoogleMapsWrapper from '../../containers/Placecasts/Create/GoogleMapsWrapper'

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
        const {title, address, audioSrc, photoSrc, user_id} = this.props.placecast
        const {currentView} = this.props
        const coordinates = `[ ${address.lat} , ${address.lng} ]`
        const streetViewElement = currentView === 'street-view' ? <StaticStreetViewContainer address={address}/> : null
        const photoElement = currentView === 'photo' ? <PhotoPanel sourceUrl={photoSrc}/> : null
        const expertElement = currentView === 'expert' ? <ExpertProfileContainer id={user_id}/> : null
        const mapElement = currentView === 'map' ?
            <MapContainer
                address={address}
                isDraggable={false}
                containerElement={<div style={{height: '400px'}}/>}
                mapElement={<div style={{height: '100%'}}/>}
            />
            : null
        return (
            <Fragment>
                <SimpleHeader title={Headers.DEEPMAPPER}/>
                <GoogleMapsWrapper
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDKpfsVMb71XPzA7NDqPFtBU3zWLATe07g&v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '50px'}}/>}
                    mapElement={<span style={{display: 'none'}}/>}
                >
                    <PlacecastViewToggler/>
                    <div className="columns is-desktop">
                        <div className='column is-6 is-offset-3'>
                            <div className='box'>
                                {photoElement}
                                {streetViewElement}
                                {mapElement}
                                {expertElement}
                            </div>
                            <div className='box'>
                                <audio controls src={audioSrc}></audio>
                            </div>
                            <div>{title}</div>
                            <div>{coordinates}</div>
                        </div>
                    </div>
                </GoogleMapsWrapper>
            </Fragment>
        )
    }

    UNSAFE_componentWillMount() {
        if (this.props.placecast === undefined) {
            this.props.getPlacecasts()
        }
    }
}
