import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import EditPlacecastVisualsButton from '../Placecasts/EditPlacecastVisualsButton'
import {cancelPhotoEdit} from '../../actions/edit'
import SaveOrCancelButtonsContainer from '../../containers/Placecasts/SaveOrCancelButtonsContainer'
import {uploadPhotoFileSuccess} from '../../actions/create2'
import EditUploadPhotoFile from './EditUploadPhotoFile'

class EditablePhotoPanel extends React.Component {

    render() {
        const {sourceUrl, newPhotoSrc} = this.props
        const src = newPhotoSrc ? newPhotoSrc : sourceUrl
        const mainElement = this.props.isEditing ?
            <EditUploadPhotoFile/> :
            <figure className="image is-128x128">
                <img src={src}/>
            </figure>
        return (
            <Fragment>
                <EditPlacecastVisualsButton/>
                {mainElement}
                <SaveOrCancelButtonsContainer
                    onCancel={dispatch => (dispatch(cancelPhotoEdit()))}
                    onSave={dispatch => (dispatch(uploadPhotoFileSuccess(newPhotoSrc)))}/>
            </Fragment>
        )
    }
}

EditablePhotoPanel.propTypes = {
    sourceUrl: PropTypes.string,
    newPhotoSrc: PropTypes.string,
    isEditing: PropTypes.bool
}

export default EditablePhotoPanel;