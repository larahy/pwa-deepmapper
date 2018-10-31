import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import EditPlacecastVisualsButton from '../Placecasts/EditPlacecastVisualsButton'
import SaveOrCancelButtonsContainer from '../../containers/Placecasts/SaveOrCancelButtonsContainer'
import GoogleMapsWrapper from '../../containers/Placecasts/Create/GoogleMapsWrapper'
import GoogleMapContainer from '../../containers/Placecasts/Create/GoogleMapContainer'
import {cancelMapEdit, saveNewAddress} from '../../actions/edit'

class EditableMap extends React.Component {

    render() {
        const {newAddress} = this.props
        console.log('new addrssin map', newAddress)
        const mainElement = this.props.isEditing ?
            <GoogleMapContainer
                isDraggable={true}
                containerElement={<div style={{height: '200px'}}/>}
                mapElement={<div style={{height: '100%'}}/>}
            />
            : <GoogleMapContainer
                isDraggable={false}
                containerElement={<div style={{height: '200px'}}/>}
                mapElement={<div style={{height: '100%'}}/>}
            />
        return (
            <Fragment>
                <EditPlacecastVisualsButton/>
                <GoogleMapsWrapper
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDKpfsVMb71XPzA7NDqPFtBU3zWLATe07g&v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{height: '50%'}}/>}
                    containerElement={<div style={{height: '50px'}}/>}
                    mapElement={<span style={{display: 'none'}}/>}>

                    <section className='section'>
                        <div className='container'>
                            {mainElement}
                        </div>
                    </section>

                </GoogleMapsWrapper>
                <SaveOrCancelButtonsContainer
                    onCancel={dispatch => (dispatch(cancelMapEdit()))}
                    onSave={dispatch => (dispatch(saveNewAddress(newAddress)))}/>
            </Fragment>
        )
    }
}

EditableMap.propTypes = {
    newAddress: PropTypes.object,
    isEditing: PropTypes.bool
}

export default EditableMap;