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
            </Fragment>
        )
    }

    UNSAFE_componentWillMount() {
        if (this.props.placecast === undefined) {
            this.props.getPlacecasts()
        }
    }
}
