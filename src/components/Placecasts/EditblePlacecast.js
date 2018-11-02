import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import HeaderWithNavigationContainer from '../../containers/Shared/HeaderWithNavigationContainer'
import {Headers, Scopes} from '../../constants/attributes'
import { goToMyDeepMapper} from '../../actions/navigation'
import IndividualPlacecastViewToggleContainer from '../../containers/Placecasts/IndividualPlacecastViewToggleContainer'
import EditablePhotoPanelContainer from '../../containers/Photo/EditablePhotoPanelContainer'
import EditableStreetViewContainer from '../../containers/Maps/EditableStreetViewContainer'
import EditableMapContainer from '../../containers/Maps/EditableMapContainer'
import EditableTitleAndSearchBarContainer from '../../containers/Placecasts/EditableTitleAndSearchBarContainer'
import SaveOrPublishOrDeleteIconsContainer from '../../containers/Placecasts/SaveOrPublishOrDeleteIconsContainer'
import {publishPlacecast, savePlacecast} from '../../actions/create2'
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
                    title={Headers.DEEPMAPPER}
                    onBack={goToMyDeepMapper()}/>
                <section className="section">
                    <div className='container info-area'>
                        <div className="columns is-mobile">
                            <div className="column is-two-thirds">
                                <EditableTitleAndSearchBarContainer/>
                            </div>
                            <div className="column">
                                <SaveOrPublishOrDeleteIconsContainer
                                    onDelete={() => {}}
                                    onSave={dispatch => (dispatch(savePlacecast()))}
                                    onPublish={dispatch => (dispatch(publishPlacecast(Scopes.EDIT)))}/>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className='container audio-area'>
                        <h3>Audio Area</h3>
                        <EditableAudioPanelContainer/>
                    </div>
                    <br></br>
                    <div className='container visuals-area'>
                        <h3>Visuals Area</h3>
                        <IndividualPlacecastViewToggleContainer displayExpertView={false}/>
                        {photoElement}
                        {streetViewElement}
                        {mapElement}
                    </div>

                </section>
            </Fragment>
        )
    }
}


export default EditablePlacecast
