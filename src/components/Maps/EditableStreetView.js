import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {saveNewAddress} from '../../actions/edit'
import NotifyingStreetViewContainer from '../../containers/Maps/NotifyingStreetViewContainer'
import EditVisualsButtonsContainer from '../../containers/Placecasts/EditVisualsButtonsContainer'

class EditableStreetView extends React.Component {

    render() {
        const {newAddress} = this.props
        return (
            <Fragment>
                <section>
                    <EditVisualsButtonsContainer
                        onSave={dispatch => (dispatch(saveNewAddress(newAddress)))}/>
                    <NotifyingStreetViewContainer/>
                </section>
            </Fragment>
        )
    }
}

EditableStreetView.propTypes = {
    newAddress: PropTypes.object,
    isEditing: PropTypes.bool
}

export default EditableStreetView;