/* eslint-disable */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SkippableStepHeader from '../SkippableStepHeader'
import {publishPlacecast, savePlacecast} from '../../../../actions/placecasts/create'
import {
    getAudioSrc,
    getLatitude,
    getLongitude,
    getPhotoSrc,
    getTitle,
    isReadyToSubmitInfo
} from '../../../../selectors/create'
import PropTypes from 'prop-types'
import {isEmpty} from 'lodash'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStreetView, faImage, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import UpdatablePlaybackPanel from '../UpdatablePlaybackPanel'
import UpdatableInfoFields from '../UpdatableInfoFields'
import NotifyingStreetViewView from '../NotifyingStreetViewView'


class ReviewPage extends Component {

    static propTypes = {
        placeCastTitle: PropTypes.string,
        photoSrc: PropTypes.string,
        audioSrc: PropTypes.string,
        lat: PropTypes.string,
        lng: PropTypes.string,
        isReadyToSubmit: PropTypes.bool
    }

    constructor(props) {
        super(props)
        this.togglePhotoOn = this.togglePhotoOn.bind(this)
        this.toggleStreetViewOn = this.toggleStreetViewOn.bind(this)
        this.toggleMapOn = this.toggleMapOn.bind(this)
        this.state = {
            showPhoto: true,
            showStreetView: false,
            showMap: false,
            readyToSubmit: false
        }
    }


    togglePhotoOn(event) {
        this.setState({
            showPhoto: true,
            showStreetView: false,
            showMap: false
        })
        event.preventDefault()
    }

    toggleStreetViewOn(event) {
        this.setState({
            showStreetView: true,
            showPhoto: false,
            showMap: false
        })
        event.preventDefault()
    }

    toggleMapOn(event) {
        this.setState({
            showMap: true,
            showPhoto: false,
            showStreetView: false
        })
        event.preventDefault()
    }


    render() {
        const {photoSrc, audioSrc, lat, lng, isReadyToSubmit} = this.props
        const playbackElement = audioSrc === "" ? <audio></audio> : <UpdatablePlaybackPanel src={audioSrc}/>
        const imageSrcUrl = photoSrc === "" ? 'https://bulma.io/images/placeholders/640x480.png' : photoSrc
        const coordinates = `[ ${lat} , ${lng} ]`
        const streetViewElement = this.state.showStreetView ? <NotifyingStreetViewView/> : null
        const streetViewElementClasses = this.state.showStreetView ?  'is-active' : ''
        const photoElement = this.state.showPhoto ?   <figure className="image is-4by3"><img src={imageSrcUrl}/></figure> : null
        const photoElementClasses = this.state.showPhoto ?  'is-active' : ''
        const mapElement = this.state.showMap ? 'this is a map' : null
        const mapElementClasses = this.state.showMap ? 'is-active' : ''
        return (
            <Fragment>

                <SkippableStepHeader
                    title='REVIEW'
                    readyToSubmit={isReadyToSubmit}
                    onSkip={savePlacecast()}
                    onNext={dispatch => (dispatch(publishPlacecast()))}/>

                <div className="tabs is-toggle is-fullwidth is-large">
                    <ul>
                        <li className={photoElementClasses}>
                            <a onClick={this.togglePhotoOn}>
                                <span className="icon is-large"><FontAwesomeIcon icon={faImage}/></span>
                            </a>
                        </li>
                        <li className={streetViewElementClasses}>
                            <a onClick={this.toggleStreetViewOn}>
                                <span className="icon is-large"><FontAwesomeIcon icon={faStreetView}/></span>
                            </a>
                        </li>
                        <li className={mapElementClasses}>
                            <a onClick={this.toggleMapOn}>
                                <span className="icon is-large"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='review-panel'>
                        {photoElement}
                        {streetViewElement}
                        {mapElement}
                </div>
                    {playbackElement}
                    <UpdatableInfoFields/>
                    <div className='steps-container is-primary'>
                        {coordinates}
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
        isReadyToSubmit: isReadyToSubmitInfo(state)
    };
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);

