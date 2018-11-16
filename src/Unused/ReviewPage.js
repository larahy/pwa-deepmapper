/* eslint-disable */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {publishPlacecast, savePlacecast, streetViewStepCompleted} from './create'
import {
    getAddress,
    getAudioSrc,
    getLatitude,
    getLongitude,
    getPhotoSrc,
    getTitle,
    isReadyToSubmitInfo
} from '../selectors/create'
import PropTypes from 'prop-types'
import {isEmpty} from 'lodash'
// import PlaybackPanelContainer from '../containers/Placecasts/Create/PlaybackPanelContainer'
import UpdatableInfoFields from '../containers/Placecasts/UpdatableInfoFields'
import PhotoPanel from '../components/Photo/PhotoPanel'
import {updateCurrentViewTo} from '../actions/placecasts'
import StaticStreetViewContainer from '../containers/Maps/StaticStreetViewContainer'
import GoogleMapsWrapper from '../containers/Maps/GoogleMapsWrapper'
import MapContainer from '../containers/Maps/GoogleMapContainer'
import {Headers} from '../constants/attributes'
import {goToCreateAudioPage} from '../actions/navigation'
import HeaderWithNavigationContainer from '../containers/Shared/HeaderWithNavigationContainer'
import {getCurrentView} from '../selectors/placecasts'
import IndividualPlacecastViewToggle from '../components/Placecasts/IndividualPlacecastViewToggle'
import IndividualPlacecastViewToggleContainer from '../containers/Placecasts/IndividualPlacecastViewToggleContainer'


class ReviewPage extends Component {

    static propTypes = {
        placeCastTitle: PropTypes.string,
        photoSrc: PropTypes.string,
        audioSrc: PropTypes.string,
        lat: PropTypes.string,
        lng: PropTypes.string,
        isReadyToSubmitInfo: PropTypes.bool,
        s3Error: PropTypes.string,
        APIError: PropTypes.string,
        address: PropTypes.object,
        currentView: PropTypes.string
    }

    constructor(props) {
        super(props)
        this.state = {
            readyToSubmit: false
        }
    }


    render() {
        const {photoSrc, audioSrc, lat, lng, isReadyToSubmitInfo, s3Error, APIError, address, currentView} = this.props
        const isReadyToSubmit = !isEmpty(photoSrc) && isReadyToSubmitInfo && !isEmpty(audioSrc)
        const playbackElement = audioSrc === "" ? <audio></audio> : <audio controls src={audioSrc}/>
        const coordinates = `[ ${lat} , ${lng} ]`
        const streetViewElement = currentView === 'street-view' ? <StaticStreetViewContainer address={address}/> : null
        const photoElement = currentView === 'photo' ? <PhotoPanel sourceUrl={photoSrc}/> : null
        const mapElement = currentView === 'map' ?
            <MapContainer
                isDraggable={false}
                containerElement={<div style={{height: `375px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
            : null
        const s3errorElement = s3Error ? <div>SOMETHING WENT WRONG</div> : null
        const APIErrorElement = APIError ? <div>{APIError}</div> : null
        return (
            <Fragment>
                <HeaderWithNavigationContainer
                    displayBackButton={true}
                    displayNextButton={false}
                    title={Headers.REVIEW}
                    readyToSubmit={isReadyToSubmit}
                    onBack={goToCreateAudioPage()}
                    onNext={dispatch => (dispatch(publishPlacecast()))}/>
                <GoogleMapsWrapper
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDKpfsVMb71XPzA7NDqPFtBU3zWLATe07g&v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '50px'}}/>}
                    mapElement={<span style={{display: 'none'}}/>}
                >

                    <IndividualPlacecastViewToggleContainer displayExpertView={false}/>
                    <div className="box">
                        {playbackElement}
                    </div>
                    <div>
                        <UpdatableInfoFields />
                        {coordinates}
                    </div>
                    <div>
                        {s3errorElement}
                        {APIErrorElement}
                        {photoElement}
                        {streetViewElement}
                        {mapElement}
                    </div>
                </GoogleMapsWrapper>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        placeCastTitle: getTitle(state),
        photoSrc: getPhotoSrc(state),
        audioSrc: getAudioSrc(state),
        lat: getLatitude(state),
        lng: getLongitude(state),
        isReadyToSubmitInfo: isReadyToSubmitInfo(state),
        s3Error: state.s3.error,
        APIError: state.create.error,
        address: getAddress(state),
        currentView: getCurrentView(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeViewTo: (view) => dispatch(updateCurrentViewTo(view)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);

