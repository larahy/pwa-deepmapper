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
import {isEmpty} from 'lodash'
import {getError} from '../selectors/errors'
import Error from '../components/shared/Error'
import {removeError} from '../actions/Errors'

class NewCreatePage extends Component {

    static propTypes = {
        removeError: PropTypes.func,
        currentView: PropTypes.string,
        error: PropTypes.object
    }
    constructor() {
        super()
        this.handleRemoveError = this.handleRemoveError.bind(this)
    }
    handleRemoveError(event) {
        this.props.removeError()
        event.preventDefault()
    }



    render() {
        const {currentView, error} = this.props
        const streetViewElement = currentView === 'street-view' ? <EditableStreetViewContainer/> : null
        const photoElement = currentView === 'photo' ? <EditablePhotoPanelContainer/> : null
        const mapElement = currentView === 'map' ? <EditableMapContainer/> : null
        const modalClasses = !isEmpty(error) ? 'modal is-active' : 'modal'

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
                    <div className={modalClasses}>
                        <div className="modal-background" onClick={event => this.handleRemoveError(event)}></div>
                        <div className="modal-content">
                            <Error/>
                        </div>
                        <button className="modal-close is-large" onClick={event => this.handleRemoveError(event)} aria-label="close"></button>
                    </div>

                </section>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        error: getError(state),
        currentView: getCurrentView(state)
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        removeError: () => dispatch(removeError()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewCreatePage);

