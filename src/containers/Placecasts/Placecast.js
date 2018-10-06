import React from 'react'
import PlacecastDetails from './PlacecastDetails'
import PropTypes from 'prop-types'

export default class Placecast extends React.Component {

    render () {
        return (
            <div>
                <PlacecastDetails id={this.props.match.params.id}/>
            </div>
        )
    }
}

Placecast.propTypes = {
    match: PropTypes.object
}
