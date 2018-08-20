import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'

class CityInfo extends PureComponent {

    render() {
        const {info} = this.props;
        const displayName = `${info.city}, ${info.state}`;

        return (
            <div>
                <div>
                    {displayName}|
                    <a target="_new" href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}>
                        Wikipedia
                    </a>
                </div>
                <img width={240} src={info.image}/>
            </div>
        );
    }
}

CityInfo.propTypes = {
    info: PropTypes.object,
}

export default CityInfo;