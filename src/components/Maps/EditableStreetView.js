import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import EditPlacecastVisualsButton from '../Placecasts/EditPlacecastVisualsButton'
import SaveOrCancelButtonsContainer from '../../containers/Placecasts/SaveOrCancelButtonsContainer'
import {cancelMapEdit, saveNewAddress} from '../../actions/edit'
import NotifyingStreetViewContainer from '../../containers/Placecasts/Create/NotifyingStreetViewContainer'

class EditableStreetView extends React.Component {

    render() {
        const {newAddress} = this.props
        return (
            <Fragment>
                <section>
                    <SaveOrCancelButtonsContainer
                        onCancel={dispatch => (dispatch(cancelMapEdit()))}
                        onSave={dispatch => (dispatch(saveNewAddress(newAddress)))}/>
                </section>
                <section>
                    <EditPlacecastVisualsButton/>
                </section>
                <section className='section'>
                    <div className='container'>
                        <NotifyingStreetViewContainer/>
                    </div>
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