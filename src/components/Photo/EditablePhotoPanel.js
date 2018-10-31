import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import SelectPhotoButton from './SelectPhotoButton'
import EditPlacecastVisualsButton from '../Placecasts/EditPlacecastVisualsButton'
import {uploadPhotoRequested} from '../../actions/s3'
import {cancelPhotoEdit} from '../../actions/edit'
import SaveOrCancelButtonsContainer from '../../containers/Placecasts/SaveOrCancelButtonsContainer'


class EditablePhotoPanel extends React.Component {

    render() {
        const src = this.props.newPhotoFile ? this.props.newPhotoFile : this.props.originalSourceUrl
        const mainElement = this.props.isEditing ?
            <SelectPhotoButton /> :
            <figure className="image is-square">
                <img src={src}/>
            </figure>
        return (
            <Fragment>
                <EditPlacecastVisualsButton />
                {mainElement}
                <SaveOrCancelButtonsContainer
                    onCancel={dispatch => (dispatch(cancelPhotoEdit()))}
                    onSave={dispatch => (dispatch(uploadPhotoRequested()))}/>
            </Fragment>
        )
    }
}

EditablePhotoPanel.propTypes = {
    originalSourceUrl: PropTypes.string,
    newPhotoFile: PropTypes.string,
    isEditing: PropTypes.bool
}

export default EditablePhotoPanel;