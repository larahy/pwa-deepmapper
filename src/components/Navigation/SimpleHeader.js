import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import './navigation.scss'

const SimpleHeader = (props) => (
    <Fragment>
        <nav id="navbarTop"className="navbar has-text-centered">
            <p className="title is-centered">{props.title}</p>
        </nav>
    </Fragment>
)

SimpleHeader.propTypes = {
    title: PropTypes.string,
}

export {SimpleHeader}