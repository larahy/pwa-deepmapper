import * as React from 'react'
import PropTypes from 'prop-types'

export default class PlacecastsList extends React.Component {
    render() {
        return <ul>{this.props.placecasts.map((placecast, i) => <li key={i}>{placecast.title}</li>)}</ul>
    }
}

PlacecastsList.propTypes = {
    placecasts: PropTypes.array.isRequired,
}
