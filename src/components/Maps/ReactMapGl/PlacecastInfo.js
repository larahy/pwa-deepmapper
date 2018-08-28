import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import Placecast from '../../Placecasts/Placecast'
import './map.scss'

class PlacecastInfo extends PureComponent {

    render() {
        const {info} = this.props;
        return (
            <div>
                <Placecast placecast={info}/>
            </div>
        );
    }
}

PlacecastInfo.propTypes = {
    info: PropTypes.object,
}

export default PlacecastInfo;