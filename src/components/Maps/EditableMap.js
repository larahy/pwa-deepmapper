import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {saveNewAddress} from '../../actions/edit'
import EditVisualsButtonsContainer from '../../containers/Placecasts/EditVisualsButtonsContainer'
import MapboxContainer from '../../containers/Maps/MapboxContainer';
/* eslint-disable no-undef */
// import GoogleMapsWrapper from '../../containers/Maps/GoogleMapsWrapper'
// import GoogleMapContainer from '../../containers/Maps/GoogleMapContainer'
// const googleMapsApiKey = GOOGLE_MAPS_API_KEY
/* eslint-disable no-undef */

class EditableMap extends React.Component {

    render() {
        const {newAddress, isEditing} = this.props
        const mainElement = isEditing ?
            <MapboxContainer
                isDraggable={true}
                containerElement={<div style={{height: '375px'}}/>}
                mapElement={<div style={{height: '100%'}}/>}
            />
            : <MapboxContainer
                isDraggable={false}
                containerElement={<div style={{height: '375px'}}/>}
                mapElement={<div style={{height: '100%'}}/>}
            />
        return (
            <Fragment>
                <section>
                    <EditVisualsButtonsContainer
                        onSave={dispatch => (dispatch(saveNewAddress(newAddress)))}/>
                    {mainElement}
                </section>
            </Fragment>
        )
    }
}

EditableMap.propTypes = {
    newAddress: PropTypes.object,
    isEditing: PropTypes.bool
}

export default EditableMap;