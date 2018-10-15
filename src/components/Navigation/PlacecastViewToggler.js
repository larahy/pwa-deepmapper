import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStreetView, faImage, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {updateCurrentViewTo} from '../../actions/placecasts'


class PlacecastViewToggler extends Component {

    static propTypes = {
        currentView: PropTypes.string,
        changeViewTo: PropTypes.func
    }

    constructor(props) {
        super(props)
    }


    toggleOn(view) {
        return this.props.changeViewTo(view)
    }


    render() {
        const {currentView} = this.props

        const streetViewElementClasses = currentView === 'street-view' ? 'is-active' : ''
        const photoElementClasses = currentView === 'photo' ? 'is-active' : ''
        const mapElementClasses = currentView === 'map' ? 'is-active' : ''
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
                    </ul>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentView: state.placecasts.currentView
    };
};
const mapDispatchToProps = dispatch => {
    return {
        changeViewTo: (view) => dispatch(updateCurrentViewTo(view)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacecastViewToggler);

