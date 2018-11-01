import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {isEmpty} from 'lodash'
import StaticStreetViewContainer from '../../containers/Maps/StaticStreetViewContainer'
import PhotoPanel from '../Photo/PhotoPanel'
import ExpertProfileContainer from '../../containers/Experts/ExpertProfileContainer'
import MapContainer from '../../containers/Maps/GoogleMapContainer'
import HeaderWithNavigationContainer from '../../containers/Shared/HeaderWithNavigationContainer'
import {Headers} from '../../constants/attributes'
import {goToHomePageThunk} from '../../actions/navigation'
import GoogleMapsWrapper from '../../containers/Maps/GoogleMapsWrapper'
import IndividualPlacecastViewToggleContainer from '../../containers/Placecasts/IndividualPlacecastViewToggleContainer'
import PlaybackPanel from '../../components/Audio/PlaybackPanel'

class IndividualPlacecast extends React.Component {
    static propTypes = {
        placecasts: PropTypes.array.isRequired,
        placecast: PropTypes.object,
        currentView: PropTypes.string
    }

    render() {
        const {placecast = {}} = this.props
        if (isEmpty(placecast)) {
            return <div>Loading...</div>;
        }
        else {
            const {title, address, audioSrc, photoSrc, user_id} = placecast
            const {currentView} = this.props
            const coordinates = `[ ${address.lat} , ${address.lng} ]`
            const streetViewElement = currentView === 'street-view' ?
                <StaticStreetViewContainer address={address}/> : null
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
                    <HeaderWithNavigationContainer
                        displayBackButton={true}
                        displayNextButton={false}
                        title={Headers.DEEPMAPPER}
                        onBack={goToHomePageThunk()}/>
                    <GoogleMapsWrapper
                        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDKpfsVMb71XPzA7NDqPFtBU3zWLATe07g&v=3.exp&libraries=geometry,drawing,places'
                        loadingElement={<div style={{height: '100%'}}/>}
                        containerElement={<div style={{height: '50px'}}/>}
                        mapElement={<span style={{display: 'none'}}/>}
                    >
                        <div>{title}</div>
                        <div>{coordinates}</div>
                        <IndividualPlacecastViewToggleContainer/>
                        <div className="columns is-desktop">
                            <div className='column is-6 is-offset-3'>
                                <div className='box'>
                                    {photoElement}
                                    {streetViewElement}
                                    {mapElement}
                                    {expertElement}
                                </div>
                                <PlaybackPanel src={audioSrc} />
                            </div>
                        </div>
                    </GoogleMapsWrapper>
                </Fragment>
            )
        }
    }
}

export default IndividualPlacecast
