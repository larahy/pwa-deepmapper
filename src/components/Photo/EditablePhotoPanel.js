import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {cancelPhotoEdit} from '../../actions/edit'
import {uploadPhotoFileSuccess} from '../../actions/create2'
import EditUploadPhotoFile from './EditUploadPhotoFile'
import EditVisualsButtonsContainer from '../../containers/Placecasts/EditVisualsButtonsContainer'

class EditablePhotoPanel extends React.Component {

    render() {
        const {sourceUrl, newPhotoSrc, isEditing} = this.props
        const src = newPhotoSrc ? newPhotoSrc : sourceUrl

        const mainElement = sourceUrl === '' && newPhotoSrc === '' || isEditing
            ? <EditUploadPhotoFile/>
            :
            <div>
                <figure className="image is-128x128">
                    <img src={src}/>
                </figure>
                <EditVisualsButtonsContainer
                    onCancel={dispatch => (dispatch(cancelPhotoEdit()))}
                    onSave={dispatch => (dispatch(uploadPhotoFileSuccess(newPhotoSrc)))}/>
            </div>
        return (
            <Fragment>
                {mainElement}
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