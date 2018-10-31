/* eslint-disable */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {publishPlacecast, savePlacecast} from '../../actions/create2'
import MapContainer from '../../containers/Placecasts/Create/GoogleMapContainer'
import {
    getAddress,
    getAudioSrc,
    getPhotoSrc,
    getTitle,
} from '../../selectors/create'
import PropTypes from 'prop-types'
import HeaderWithNavigationContainer from '../../containers/Shared/HeaderWithNavigationContainer'
import {Headers} from '../../constants/attributes'
import {goToCreateAudioPage} from '../../actions/navigation'
import IndividualPlacecastViewToggleContainer from '../../containers/Placecasts/IndividualPlacecastViewToggleContainer'
import {TitleAndCoordinates} from '../../components/Placecasts/TitleAndCoordinates'
import GoogleMapsWrapper from '../../containers/Placecasts/Create/GoogleMapsWrapper'
import {getCurrentView} from '../../selectors/placecasts'
import {updateCurrentViewTo} from '../../actions/placecasts'
import SaveOrPublishOrDeleteIconsContainer from '../../containers/Placecasts/SaveOrPublishOrDeleteIconsContainer'
import EditablePhotoPanelContainer from '../../containers/Placecasts/EditablePhotoPanelContainer'
import EditableMapContainer from '../../containers/Placecasts/EditableMapContainer'
import EditableStreetViewContainer from '../../containers/Placecasts/EditableStreetViewContainer'

class ReviewPage2 extends Component {

    static propTypes = {
        title: PropTypes.string,
        audioSrc: PropTypes.string,
        address: PropTypes.object,
        currentView: PropTypes.string
    }

    render() {
        const {audioSrc, address, currentView, title} = this.props
        const playbackElement = audioSrc === "" ? <audio></audio> : <audio controls src={audioSrc}/>
        const streetViewElement = currentView === 'street-view' ? <EditableStreetViewContainer /> : null
        const photoElement = currentView === 'photo' ? <EditablePhotoPanelContainer /> : null
        const mapElement = currentView === 'map' ? <EditableMapContainer /> : null
        return (
            <Fragment>
                <HeaderWithNavigationContainer
                    displayBackButton={true}
                    displayNextButton={false}
                    title={Headers.DEEPMAPPER}
                    onBack={goToCreateAudioPage()}/>
                <GoogleMapsWrapper
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDKpfsVMb71XPzA7NDqPFtBU3zWLATe07g&v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '50px'}}/>}
                    mapElement={<span style={{display: 'none'}}/>}>
                    <TitleAndCoordinates address={address} title={title}/>
                    <SaveOrPublishOrDeleteIconsContainer
                        onDelete={() => {}}
                        onSave={dispatch => (dispatch(savePlacecast()))}
                        onPublish={dispatch => (dispatch(publishPlacecast()))}
                    />
                    <IndividualPlacecastViewToggleContainer displayExpertView={false}/>
                    <div>
                        {photoElement}
                        {streetViewElement}
                        {mapElement}
                    </div>
                    {playbackElement}
                </GoogleMapsWrapper>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: getTitle(state),
        audioSrc: getAudioSrc(state),
        address: getAddress(state),
        currentView: getCurrentView(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeViewTo: (view) => dispatch(updateCurrentViewTo(view)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage2);

