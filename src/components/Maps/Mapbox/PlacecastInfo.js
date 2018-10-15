import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import './map.scss'
import PlacecastFeedView from '../../Placecasts/PlacecastFeedView'

class PlacecastInfo extends PureComponent {

    render() {
        const {info} = this.props;
        return (
            <div>
                <PlacecastFeedView placecast={info}/>
            </div>
        );
    }
}

PlacecastInfo.propTypes = {
    info: PropTypes.object,
}

export default PlacecastInfo;