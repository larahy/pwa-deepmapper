import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import Placecast from '../../Placecasts/Placecast'

class PlacecastInfo extends PureComponent {

    render() {
        const {info} = this.props;
        return (
            <div>
                <Placecast placecast={info}/>
                {/*<div>*/}
                {/*{displayName}|*/}
                {/*</div>*/}
                {/*<img width={240} src={info.image}/>*/}
            </div>
        );
    }
}

PlacecastInfo.propTypes = {
    info: PropTypes.object,
}

export default PlacecastInfo;