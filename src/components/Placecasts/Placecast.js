import React from 'react'
import PropTypes from 'prop-types'

export default class Placecast extends React.Component {
    render() {
        return <div>
            <p >{this.props.placecast.title}</p>
            <p >{this.props.placecast.subtitle}</p>
            <p >{this.props.placecast.coordinates}</p>

        </div>
    }
}

Placecast.propTypes = {
    placecast: PropTypes.object.isRequired,
}