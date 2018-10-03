/* eslint-disable */
import React, {Component, Fragment} from 'react'
import GoogleMapsWrapper from '../GoogleMapsWrapper'
import NotifyingSearchBar from '../NotifyingSearchBar'
import NotifyingMap from '../NotifyingMap'
import {getAddress} from '../../../../selectors/create'
import connect from 'react-redux/es/connect/connect'
import {isEmpty} from 'lodash'

import PropTypes from 'prop-types'
import SkippableStepHeader from '../SkippableStepHeader'
import {mapSkipped, mapStepCompleted} from '../../../../actions/placecasts/create'

class CreateMapPage extends Component {

    static propTypes = {
        mapAddress: PropTypes.object,
    }

    constructor(props) {
        super(props)
        this.handlemapOpen = this.handlemapOpen.bind(this)
        this.state = {
            showMap: false,
            readyToSubmit: false

        }
    }

    toggleModal() {
        this.setState({
            showMap: !this.state.showMap,
            readyToSubmit: !this.state.readyToSubmit

        })
    }

    handlemapOpen(event) {
        this.toggleModal()
        event.preventDefault()
    }

    render() {
        const {mapAddress} = this.props
        const mapButtonClasses = isEmpty(mapAddress) ? 'button is-medium is-fullwidth' : 'button is-medium is-fullwidth is-primary'
        const searchBarElement = !this.state.showMap ? <NotifyingSearchBar/> : null
        const searchBarButton = !this.state.showMap ?
            <a className={mapButtonClasses} onClick={this.handlemapOpen} disabled={isEmpty(mapAddress)}>
                Load map
            </a> : null
        const mapElement = this.state.showMap ?
            <NotifyingMap
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            : null
        const searchAgainButton = this.state.showMap ?
            <a className='button is-medium is-light is-fullwidth' onClick={this.handlemapOpen}>
                search again
            </a> : null


        return (
            <Fragment>
                <SkippableStepHeader
                    title='MAP'
                    readyToSubmit={this.state.readyToSubmit}
                    onSkip={mapSkipped()}
                    onNext={dispatch => (dispatch(mapStepCompleted()))}/>
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
                                            <p className="title">Add location</p>
                                            <p className="subtitle">bla bla bla</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child">
                                            <div className="columns is-centered">
                                                <div className="column">
                                                    {searchBarElement}
                                                    {mapElement}
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
        mapAddress: getAddress(state)
    }
}

export default connect(mapStateToProps)(CreateMapPage);