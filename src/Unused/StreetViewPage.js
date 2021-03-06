/* eslint-disable */
import React, {Component, Fragment} from 'react'
import GoogleMapsWrapper from '../containers/Maps/GoogleMapsWrapper'
import NotifyingSearchBar from '../containers/Maps/NotifyingSearchBar'
import {getAddress} from '../selectors/create'
import connect from 'react-redux/es/connect/connect'
import {isEmpty} from 'lodash'

import PropTypes from 'prop-types'
import {streetViewStepCompleted} from './create'
import NotifyingStreetViewContainer from '../containers/Maps/NotifyingStreetViewContainer'
import {Headers} from '../constants/attributes'
import HeaderWithNavigationContainer from '../containers/Shared/HeaderWithNavigationContainer'
import {goToCreateAudioPage} from '../actions/navigation'

class StreetViewPage extends Component {

    static propTypes = {
        streetViewAddress: PropTypes.object,
    }

    constructor(props) {
        super(props)
        this.handleStreetViewOpen = this.handleStreetViewOpen.bind(this)
        this.state = {
            showStreetView: false,
            readyToSubmit: false
        }
    }

    toggleModal() {
        this.setState({
            showStreetView: !this.state.showStreetView,
            readyToSubmit: !this.state.readyToSubmit
        })
    }

    handleStreetViewOpen(event) {
        this.toggleModal()
        event.preventDefault()
    }

    render() {
        const {streetViewAddress} = this.props
        const streetViewButtonClasses = isEmpty(streetViewAddress) ? 'button is-medium is-fullwidth' : 'button is-medium is-fullwidth is-primary'
        const searchBarElement = !this.state.showStreetView ? <NotifyingSearchBar/> : null
        const searchBarButton = !this.state.showStreetView ?
            <a className={streetViewButtonClasses} onClick={this.handleStreetViewOpen}
               disabled={isEmpty(streetViewAddress)}>
                StreetView
            </a> : null
        const streetViewElement = this.state.showStreetView ? <NotifyingStreetViewContainer /> : null
        const searchAgainButton = this.state.showStreetView ?
            <a className='button is-medium is-light is-fullwidth' onClick={this.handleStreetViewOpen}>
                search again
            </a> : null


        return (
            <Fragment>
                <HeaderWithNavigationContainer
                    displayBackButton={true}
                    displayNextButton={true}
                    title={Headers.STREET_VIEW}
                    readyToSubmit={this.state.readyToSubmit}
                    onBack={goToCreateAudioPage()}
                    onNext={dispatch => (dispatch(streetViewStepCompleted()))}/>
                <GoogleMapsWrapper
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDKpfsVMb71XPzA7NDqPFtBU3zWLATe07g&v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '80px'}}/>}
                    mapElement={<span style={{display: 'none'}}/>}
                >
                        {streetViewElement}
                        <div className="steps-container is-centered">
                            <div className="container">
                                <div className="columns is-centered">
                                    <div className="column is-two-thirds is-centered">
                                        <div className="tile is-parent">
                                            <article className="tile is-child">
                                                <div className="columns is-centered">
                                                        {searchBarElement}
                                                </div>
                                                <div className="columns is-mobile">
                                                    <div className="column is-half is-offset-one-quarter">
                                                        {searchBarButton}
                                                        {searchAgainButton}
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                </GoogleMapsWrapper>
            </Fragment>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        streetViewAddress: getAddress(state)
    }
}

export default connect(mapStateToProps)(StreetViewPage);