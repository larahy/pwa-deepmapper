/* eslint-disable */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import HeaderWithNavigationContainer from '../containers/Shared/HeaderWithNavigationContainer'
import {Headers, Scopes} from '../constants/attributes'
import {goToMyDeepMapper} from '../actions/navigation'
import IndividualPlacecastViewToggleContainer from '../containers/Placecasts/IndividualPlacecastViewToggleContainer'
import {getCurrentView} from '../selectors/placecasts'
import SaveOrPublishOrDeleteIconsContainer from '../containers/Placecasts/SaveOrPublishOrDeleteIconsContainer'
import EditablePhotoPanelContainer from '../containers/Photo/EditablePhotoPanelContainer'
import EditableMapContainer from '../containers/Maps/EditableMapContainer'
import EditableStreetViewContainer from '../containers/Maps/EditableStreetViewContainer'
import EditableTitleAndSearchBarContainer from '../containers/Placecasts/EditableTitleAndSearchBarContainer'
import EditableAudioPanelContainer from '../containers/Audio/EditableAudioPanelContainer'
import {deletePlacecast, publishPlacecast, savePlacecast} from '../actions/edit'

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
                    title={Headers.CREATE}
                    onBack={goToMyDeepMapper()}/>
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

