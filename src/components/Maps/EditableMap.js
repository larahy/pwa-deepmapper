import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import GoogleMapsWrapper from '../../containers/Maps/GoogleMapsWrapper'
import GoogleMapContainer from '../../containers/Maps/GoogleMapContainer'
import {cancelMapEdit, saveNewAddress} from '../../actions/edit'
import EditVisualsButtonsContainer from '../../containers/Placecasts/EditVisualsButtonsContainer'
/* eslint-disable no-undef */
const googleMapsApiKey = GOOGLE_MAPS_API_KEY
/* eslint-disable no-undef */

class EditableMap extends React.Component {

    render() {
        const {newAddress, isEditing} = this.props
        const mainElement = isEditing ?
            <GoogleMapContainer
                isDraggable={true}
                containerElement={<div style={{height: '400px'}}/>}
                mapElement={<div style={{height: '100%'}}/>}
            />
            : <GoogleMapContainer
                isDraggable={false}
                containerElement={<div style={{height: '400px'}}/>}
                mapElement={<div style={{height: '100%'}}/>}
            />
        return (
            <Fragment>
                <GoogleMapsWrapper
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '100%'}}/>}
                    mapElement={<span style={{display: 'none'}}/>}>

                    <section className='section'>
                        <EditVisualsButtonsContainer
                            onCancel={dispatch => (dispatch(cancelMapEdit()))}
                            onSave={dispatch => (dispatch(saveNewAddress(newAddress)))}/>
                        {mainElement}
                    </section>

                </GoogleMapsWrapper>
            </Fragment>
        )
    }
}

EditableMap.propTypes = {
    newAddress: PropTypes.object,
    isEditing: PropTypes.bool
}

export default EditableMap;