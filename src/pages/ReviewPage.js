/* eslint-disable */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SkippableStepHeader from '../containers/Placecasts/Create/SkippableStepHeader'
import {loadPhotoFile, publishPlacecast, savePlacecast} from '../actions/placecasts/create'
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
import UpdatablePlaybackPanel from '../containers/Placecasts/Create/UpdatablePlaybackPanel'
import UpdatableInfoFields from '../containers/Placecasts/Create/UpdatableInfoFields'
import PhotoPanel from '../components/Photo/PhotoPanel'
import StaticStreetViewView from '../components/Maps/StreetView/StaticStreetViewView'
import {updateCurrentViewTo} from '../actions/placecasts'
import PlacecastViewToggler from '../components/Navigation/PlacecastViewToggler'


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
        const playbackElement = audioSrc === "" ? <audio></audio> : <UpdatablePlaybackPanel src={audioSrc}/>
        const coordinates = `[ ${lat} , ${lng} ]`
        const streetViewElement = currentView === 'street-view' ? <StaticStreetViewView address={address}/> : null
        const photoElement = currentView === 'photo' ? <PhotoPanel sourceUrl={photoSrc}/> : null
        const mapElement = currentView === 'map' ? 'this is a map' : null
        const s3errorElement = s3Error ? <div>SOMETHING WENT WRONG</div> : null
        const APIErrorElement = APIError ? <div>{APIError}</div> : null
        return (
            <Fragment>

                <SkippableStepHeader
                    title='REVIEW'
                    readyToSubmit={isReadyToSubmit}
                    onSkip={savePlacecast()}
                    onNext={dispatch => (dispatch(publishPlacecast()))}/>

                <PlacecastViewToggler />
                <div className="columns is-desktop">
                    <div className='column is-6 is-offset-3'>
                        <div className='review-panel'>
                            {s3errorElement}
                            {APIErrorElement}
                            {photoElement}
                            {streetViewElement}
                            {mapElement}
                        </div>
                        {playbackElement}
                        <UpdatableInfoFields/>
                        <div className='steps-container is-primary'>
                            {coordinates}
                        </div>
                    </div>
                </div>
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
        currentView: state.placecasts.currentView
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeViewTo: (view) => dispatch(updateCurrentViewTo(view)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);

