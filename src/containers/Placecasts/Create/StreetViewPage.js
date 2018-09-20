/* eslint-disable */
import React, {Component, Fragment} from 'react'
import GoogleMapsWrapper from './GoogleMapsWrapper'
import NotifyingSearchBar from './NotifyingSearchBar'
import NotifyingStreetViewView from './NotifyingStreetViewView'
import {getAddress} from '../../../selectors/create'
import connect from 'react-redux/es/connect/connect'
import {isEmpty} from 'lodash'

import PropTypes from 'prop-types'
import SkippableStepHeader from './SkippableStepHeader'
import {streetViewSkipped, audioStepCompleted} from '../../../actions/placecasts/create'

class StreetViewPage extends Component {

    static propTypes = {
        streetViewAddress: PropTypes.object,
    }

    constructor(props) {
        super(props)
        this.handleStreetViewOpen = this.handleStreetViewOpen.bind(this)
        this.state = {
            showStreetView: false,
        }
    }

    toggleModal() {
        this.setState({
            showStreetView: !this.state.showStreetView,
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
            <a className={streetViewButtonClasses} onClick={this.handleStreetViewOpen} disabled={isEmpty(streetViewAddress)}>
                Load StreetView
            </a> : null
        const streetViewElement = this.state.showStreetView ? <NotifyingStreetViewView/> : null
        const searchAgainButton = this.state.showStreetView ?
            <a className='button is-medium is-light is-fullwidth' onClick={this.handleStreetViewOpen}>
                search again
            </a> : null


        return (
            <Fragment>
                <SkippableStepHeader
                    title='STEP 3: AUDIO'
                    readyToSubmitOther={this.state.readyToSubmit}
                    onSkip={streetViewSkipped()}
                    onNext={dispatch => (dispatch(audioStepCompleted(this.state.file, this.props.placeCastTitle)))}/>
                <GoogleMapsWrapper
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDKpfsVMb71XPzA7NDqPFtBU3zWLATe07g&v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '50px'}}/>}
                    mapElement={<span style={{display: 'none'}}/>}
                >
                    <div className="steps-container is-centered">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-two-thirds is-centered">
                                    <div className="tile is-parent">
                                        <article className="tile is-child">
                                            <p className="title">Adjust street view</p>
                                            <p className="subtitle">bla bla bla</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child">
                                            <div className="columns is-centered">
                                                <div className="column">
                                                    {searchBarElement}
                                                    {streetViewElement}
                                                </div>
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