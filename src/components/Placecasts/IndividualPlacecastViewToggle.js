import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStreetView, faImage, faMapMarkerAlt, faInfo} from '@fortawesome/free-solid-svg-icons'

export default class IndividualPlacecastViewToggle extends Component {

    static propTypes = {
        currentView: PropTypes.string,
        changeViewTo: PropTypes.func,
        displayExpertView: PropTypes.bool,
    }

    static defaultProps = {
        displayExpertView: true
    }


    constructor(props) {
        super(props)
    }


    toggleOn(view) {
        return this.props.changeViewTo(view)
    }


    render() {
        const {currentView, displayExpertView} = this.props

        const streetViewElementClasses = currentView === 'street-view' ? 'is-active' : ''
        const photoElementClasses = currentView === 'photo' ? 'is-active' : ''
        const mapElementClasses = currentView === 'map' ? 'is-active' : ''
        const expertElementClasses = currentView === 'expert' ? 'is-active' : ''
        const expertElementLink = displayExpertView ?
            <li className={expertElementClasses}>
                <a onClick={() => this.toggleOn('expert')}>
                    <span className="icon is-large"><FontAwesomeIcon icon={faInfo}/></span>
                </a>
            </li> :
            null
        return (
            <Fragment>

                <div className="tabs is-toggle is-fullwidth is-large">
                    <ul>
                        <li className={photoElementClasses}>
                            <a onClick={() => this.toggleOn('photo')}>
                                <span className="icon is-large"><FontAwesomeIcon icon={faImage}/></span>
                            </a>
                        </li>
                        <li className={streetViewElementClasses}>
                            <a onClick={() => this.toggleOn('street-view')}>
                                <span className="icon is-large"><FontAwesomeIcon icon={faStreetView}/></span>
                            </a>
                        </li>
                        <li className={mapElementClasses}>
                            <a onClick={() => this.toggleOn('map')}>
                                <span className="icon is-large"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                            </a>
                        </li>
                        <li className={mapElementClasses}>
                            <a>
                                <span className="icon is-large"><FontAwesomeIcon icon={faInfo}/></span>
                            </a>
                        </li>
                        {expertElementLink}
                    </ul>
                </div>
            </Fragment>
        )
    }
}




