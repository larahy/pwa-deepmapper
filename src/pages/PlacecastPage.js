import React from 'react'
import PlacecastDetails from '../containers/Placecasts/View/PlacecastDetails'
import PropTypes from 'prop-types'

export default class PlacecastPage extends React.Component {

    render () {
        return (
            <div>
                <PlacecastDetails id={this.props.match.params.id}/>
            </div>
        )
    }
}

PlacecastPage.propTypes = {
    match: PropTypes.object
}
