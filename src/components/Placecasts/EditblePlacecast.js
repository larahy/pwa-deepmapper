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
import EditableAudioPanelContainer from '../../containers/Audio/EditableAudioPanelContainer'
import {deletePlacecast, publishPlacecast, savePlacecast} from '../../actions/edit'

class EditablePlacecast extends React.Component {
    state = {
        isOptionsMenuVisible: false
    }

    static propTypes = {
        currentView: PropTypes.string
    }

    toggleOptionsMenu = (e) => {
        e.stopPropagation();
        this.setState({ isOptionsMenuVisible: !this.state.isOptionsMenuVisible });
    }

    hideOptionsMenu = () => {
        this.setState({ isOptionsMenuVisible: false });
    }

    render() {
        const { currentView } = this.props;
        const { isOptionsMenuVisible } = this.state;
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
                    <section className="create-section" onClick={this.hideOptionsMenu}>
                        <div className='create-top-section'>  
                            <div className="create-top-input">
                                <EditableTitleAndSearchBarContainer/>
                            </div>
                            <div className="create-top-buttons">
                                <div 
                                    className='options-menu-button' 
                                    onClick={this.toggleOptionsMenu}
                                >
                                    <i className="fas fa-ellipsis-v"></i>
                                </div>
                                <div className={isOptionsMenuVisible ? '' : 'hide-options-menu'}>
                                    <SaveOrPublishOrDeleteIconsContainer
                                        onDelete={dispatch => (dispatch(deletePlacecast(Scopes.CREATE)))}
                                        onSave={dispatch => (dispatch(savePlacecast(Scopes.CREATE)))}
                                        onPublish={dispatch => (dispatch(publishPlacecast(Scopes.CREATE)))}/>
                                </div>
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
