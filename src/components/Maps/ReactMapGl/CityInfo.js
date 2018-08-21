import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'

class CityInfo extends PureComponent {

    render() {
        const {info} = this.props;
        const displayName = `${info.title}`;

        return (
            <div>
                <div>
                    {displayName}|
                </div>
                {/*<img width={240} src={info.image}/>*/}
            </div>
        );
    }
}

CityInfo.propTypes = {
    info: PropTypes.object,
}

export default CityInfo;