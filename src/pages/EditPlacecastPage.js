import React from 'react'
import PropTypes from 'prop-types'
import EditablePlacecastContainer from '../containers/Placecasts/EditablePlacecastContainer'

export default class EditPlacecastPage extends React.Component {
    static displayName = 'Edit Placecast'

    render () {
        return (
            <div>
                <EditablePlacecastContainer />
            </div>
        )
    }
}

EditPlacecastPage.propTypes = {
    match: PropTypes.object
}
