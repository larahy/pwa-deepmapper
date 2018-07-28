import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ZipCodeListItem } from './ZipCodeListItem';

const renderList = zipCodes => (
    <div className="list-group animated fadeIn">
        {zipCodes.map(zipCode => renderListItem(zipCode))}
    </div>
);

const renderListItem = zipCode => (
    <Fragment key={zipCode._id}>
        <ZipCodeListItem city={zipCode.city} state={zipCode.state} population={zipCode.pop} id={zipCode._id} />
    </Fragment>
);

const ZipCodeList = (props) => (
    <Fragment>
        {renderList(props.zipCodes)}
    </Fragment>
);

ZipCodeList.propTypes = {
    zipCodes: PropTypes.array.isRequired
};

export { ZipCodeList };