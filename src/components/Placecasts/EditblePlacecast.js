import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import HeaderWithNavigationContainer from '../../containers/Shared/HeaderWithNavigationContainer'
import {Headers, Scopes} from '../../constants/attributes'
import {goToMyDeepMapperThunk} from '../../actions/navigation'
import IndividualPlacecastViewToggleContainer from '../../containers/Placecasts/IndividualPlacecastViewToggleContainer'
import EditablePhotoPanelContainer from '../../containers/Photo/EditablePhotoPanelContainer'
import EditableStreetViewContainer from '../../containers/Maps/EditableStreetViewContainer'
import EditableMapContainer from '../../containers/Maps/EditableMapContainer'
import EditableTitleAndSearchBarContainer from '../../containers/Placecasts/EditableTitleAndSearchBarContainer'
import SaveOrPublishOrDeleteIconsContainer from '../../containers/Placecasts/SaveOrPublishOrDeleteIconsContainer'
import {deletePlacecast, publishPlacecast, savePlacecast} from '../../actions/create2'
import EditableAudioPanelContainer from '../../containers/Audio/EditableAudioPanelContainer'

class EditablePlacecast extends React.Component {
    static propTypes = {
        currentView: PropTypes.string
    }
    render() {
        const {currentView} = this.props
        const streetViewElement = currentView === 'street-view' ? <EditableStreetViewContainer/> : null
        const photoElement = currentView === 'photo' ? <EditablePhotoPanelContainer/> : null
        const mapElement = currentView === 'map' ? <EditableMapContainer/> : null
        return (
            <Fragment>
                <HeaderWithNavigationContainer
                    displayBackButton={true}
                    displayNextButton={false}
                    title={Headers.EDIT}
                    onBack={goToMyDeepMapperThunk()}/>
                <div style={{height: '100%'}}>
                    <section className="create-section">
                        <div className='create-top-section'>  
                            <div className="create-top-input">
                                <EditableTitleAndSearchBarContainer/>
                            </div>
                            <div className="create-top-buttons">
                                <SaveOrPublishOrDeleteIconsContainer
                                    onDelete={dispatch => (dispatch(deletePlacecast(Scopes.CREATE)))}
                                    onSave={dispatch => (dispatch(savePlacecast(Scopes.CREATE)))}
                                    onPublish={dispatch => (dispatch(publishPlacecast(Scopes.CREATE)))}/>
                            </div>
                        </div>
                        <div className='create-mid-section'>
                            <IndividualPlacecastViewToggleContainer displayExpertView={false}/>
                            {photoElement}
                            {streetViewElement}
                            {mapElement}
                        </div>
                        <div className='create-bottom-section'>
                            <EditableAudioPanelContainer/>
                        </div>

                    </section>
                </div>
            </Fragment>
        )
    }
}


export default EditablePlacecast
