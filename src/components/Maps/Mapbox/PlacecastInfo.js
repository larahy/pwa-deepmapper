import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import './map.scss'
import {Link} from 'react-router-dom'

class PlacecastInfo extends PureComponent {

    render() {
        const {title, id} = this.props.info
        const linkToPlacecast = `placecasts/${id}`
        return (
            <div>
                <Link to={linkToPlacecast}>
                    <div>{title}</div>
                </Link>
            </div>
        );
    }
}

PlacecastInfo.propTypes = {
    info: PropTypes.object,
}

export default PlacecastInfo;