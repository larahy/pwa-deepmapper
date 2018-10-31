import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const TitleAndCoordinates = (props) => (
    <Fragment>
        <h1>{props.title}</h1>
        <h2>[{props.address.lat} , {props.address.lng} ]</h2>
    </Fragment>
)

TitleAndCoordinates.propTypes = {
    title: PropTypes.string,
    address: PropTypes.object,
}

export {TitleAndCoordinates}