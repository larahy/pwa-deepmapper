import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import SelectPhotoButton from './SelectPhotoButton'
import EditPlacecastVisualsButton from '../Placecasts/EditPlacecastVisualsButton'
import SaveOrCancelButtons from '../Placecasts/SaveOrCancelButtons'


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
                <SaveOrCancelButtons />
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