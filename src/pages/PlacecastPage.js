import React from 'react'
import PropTypes from 'prop-types'
import IndividualPlacecastContainer from '../containers/Placecasts/IndividualPlacecastContainer'

export default class PlacecastPage extends React.Component {
    static displayName = 'Placecast'

    render () {
        return (
            <div>
                <IndividualPlacecastContainer id={this.props.match.params.id}/>
            </div>
        )
    }
}

PlacecastPage.propTypes = {
    match: PropTypes.object
}
