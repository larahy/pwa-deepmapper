import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
// import UpdatablePlaybackPanel from '../../containers/Placecasts/Create/UpdatablePlaybackPanel'
// import StaticStreetViewView from '../../containers/Placecasts/Create/StaticStreetViewView'
// import PhotoPanel from '../Photo/PhotoPanel'

export default class PlacecastCardDetail extends React.Component {
    static propTypes = {
        placecast: PropTypes.object,
        getPlacecasts: PropTypes.func
    }
    static defaultProps = {
        getPlacecasts: () => {
        },
    }

    render() {
        const {title, id, subtitle, address, audioSrc, photoSrc} = this.props.placecast
        // const playbackElement = audioSrc === "" ? <audio></audio> : <UpdatablePlaybackPanel src={audioSrc}/>
        // const coordinates = `[ ${latitude} , ${longitude} ]`
        // const streetViewElement = this.state.showStreetView ? <StaticStreetViewView address={address}/> : null
        // const streetViewElementClasses = this.state.showStreetView ? 'is-active' : ''
        // const photoElement = this.state.showPhoto ? <PhotoPanel sourceUrl={photoSrc}/> : null
        // const photoElementClasses = this.state.showPhoto ? 'is-active' : ''
        // const mapElement = this.state.showMap ? 'this is a map' : null
        // const mapElementClasses = this.state.showMap ? 'is-active' : ''
        return (
            <Fragment>
                <div>{title}</div>
                <div>{subtitle}</div>
                <div>{id}</div>
                <div>{photoSrc}</div>
                <div>{audioSrc}</div>
                <div>{address.lat}</div>
                <div>{address.lng}</div>
                <div>{address.pitch}</div>
                {/*<div className="tabs is-toggle is-fullwidth is-large">*/}
                {/*<ul>*/}
                {/*<li className={photoElementClasses}>*/}
                {/*<a onClick={this.togglePhotoOn}>*/}
                {/*<span className="icon is-large"><FontAwesomeIcon icon={faImage}/></span>*/}
                {/*</a>*/}
                {/*</li>*/}
                {/*<li className={streetViewElementClasses}>*/}
                {/*<a onClick={this.toggleStreetViewOn}>*/}
                {/*<span className="icon is-large"><FontAwesomeIcon icon={faStreetView}/></span>*/}
                {/*</a>*/}
                {/*</li>*/}
                {/*<li className={mapElementClasses}>*/}
                {/*<a onClick={this.toggleMapOn}>*/}
                {/*<span className="icon is-large"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>*/}
                {/*</a>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*<div className="columns is-desktop">*/}
                {/*<div className='column is-6 is-offset-3'>*/}
                {/*<div className='review-panel'>*/}
                {/*{photoElement}*/}
                {/*{streetViewElement}*/}
                {/*{mapElement}*/}
                {/*</div>*/}
                {/*{playbackElement}*/}
                {/*<UpdatableInfoFields/>*/}
                {/*<div className='steps-container is-primary'>*/}
                {/*{coordinates}*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
            </Fragment>
        )
    }

    UNSAFE_componentWillMount() {
        if (this.props.placecast === undefined) {
            this.props.getPlacecasts()
        }
    }
}
