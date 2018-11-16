import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import EditUploadPhotoFile from './EditUploadPhotoFile'
import EditPhotoButtonsContainer from '../../containers/Placecasts/EditPhotoButtonsContainer'

class EditablePhotoPanel extends React.Component {

    render() {
        const {sourceUrl, newPhotoSrc, isEditing} = this.props
        const src = newPhotoSrc ? newPhotoSrc : sourceUrl

        const mainElement = sourceUrl === '' && newPhotoSrc === '' || isEditing
            ? <EditUploadPhotoFile/>
            :
            <div className='upload-image'>
                <img src={src}/>
                
                <EditPhotoButtonsContainer />
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