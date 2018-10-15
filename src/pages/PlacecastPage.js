import React from 'react'
import PropTypes from 'prop-types'
import PlacecastPageViewContainer from '../containers/Placecasts/PlacecastPageViewContainer'

export default class PlacecastPage extends React.Component {

    render () {
        return (
            <div>
                <PlacecastPageViewContainer id={this.props.match.params.id}/>
            </div>
        )
    }
}

PlacecastPage.propTypes = {
    match: PropTypes.object
}
