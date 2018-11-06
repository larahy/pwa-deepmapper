/* eslint-disable */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {deletePlacecast, publishPlacecast, savePlacecast} from '../actions/create2'
import PropTypes from 'prop-types'
import HeaderWithNavigationContainer from '../containers/Shared/HeaderWithNavigationContainer'
import {Headers, Scopes} from '../constants/attributes'
import {goToCreateAudioPage, goToMyDeepMapper} from '../actions/navigation'
import IndividualPlacecastViewToggleContainer from '../containers/Placecasts/IndividualPlacecastViewToggleContainer'
import {getCurrentView} from '../selectors/placecasts'
import SaveOrPublishOrDeleteIconsContainer from '../containers/Placecasts/SaveOrPublishOrDeleteIconsContainer'
import EditablePhotoPanelContainer from '../containers/Photo/EditablePhotoPanelContainer'
import EditableMapContainer from '../containers/Maps/EditableMapContainer'
import EditableStreetViewContainer from '../containers/Maps/EditableStreetViewContainer'
import EditableTitleAndSearchBarContainer from '../containers/Placecasts/EditableTitleAndSearchBarContainer'
import EditableAudioPanelContainer from '../containers/Audio/EditableAudioPanelContainer'

class NewCreatePage extends Component {

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
                <section className="create-section">
                    <div className='something'>
                        <div className="lalala">
                            <div className="lululu">
                                <EditableTitleAndSearchBarContainer/>
                            </div>
                            <div className="kakaka">
                                <SaveOrPublishOrDeleteIconsContainer
                                    onDelete={dispatch => (dispatch(deletePlacecast(Scopes.CREATE)))}
                                    onSave={dispatch => (dispatch(savePlacecast(Scopes.CREATE)))}
                                    onPublish={dispatch => (dispatch(publishPlacecast(Scopes.CREATE)))}/>
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

const mapStateToProps = (state) => {
    return {
        currentView: getCurrentView(state)
    };
};


export default connect(mapStateToProps)(NewCreatePage);

