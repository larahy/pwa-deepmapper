import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const SimpleHeader = (props) => (
    <Fragment>
        <nav className="navbar">
            <h1>{props.title}</h1>
        </nav>
    </Fragment>
)

SimpleHeader.propTypes = {
    title: PropTypes.string,
}

export {SimpleHeader}