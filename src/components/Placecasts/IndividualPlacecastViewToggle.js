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
        const { currentView, displayExpertView } = this.props

        const splitPerc = displayExpertView ? '25%' : '34%';
        const streetViewElementClasses = currentView === 'street-view' ? 'is-active' : ''
        const photoElementClasses = currentView === 'photo' ? 'is-active' : ''
        const mapElementClasses = currentView === 'map' ? 'is-active' : ''
        const expertElementClasses = currentView === 'expert' ? 'is-active' : ''
        // const expertElementLink = displayExpertView ?
        //     <li className={expertElementClasses}>
        //         <p onClick={() => this.toggleOn('expert')}>
        //             <span className="icon is-large"><FontAwesomeIcon icon={faInfo}/></span>
        //         </p>
        //     </li> :
        //     null
        return (
            <Fragment>
                <ul className="create-toggle-list">
                    <li style={{ width: splitPerc }} className={photoElementClasses}>
                        <p onClick={() => this.toggleOn('photo')}>
                            <span className="icon is-large"><FontAwesomeIcon icon={faImage}/></span>
                        </p>
                    </li>
                    <li style={{ width: splitPerc }} className={streetViewElementClasses}>
                        <p onClick={() => this.toggleOn('street-view')}>
                            <span className="icon is-large"><FontAwesomeIcon icon={faStreetView}/></span>
                        </p>
                    </li>
                    <li style={{ width: splitPerc }} className={mapElementClasses}>
                        <p onClick={() => this.toggleOn('map')}>
                            <span className="icon is-large"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                        </p>
                    </li>
                    {displayExpertView && 
                      <li style={{ width: splitPerc }} className={expertElementClasses}>
                          <p onClick={() => this.toggleOn('expert')}>
                              <span className="icon is-large"><FontAwesomeIcon icon={faInfo}/></span>
                          </p>
                      </li>}
                </ul>
            </Fragment>
        )
    }
}




