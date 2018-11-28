import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStreetView, faImage, faMapMarkerAlt, faInfo} from '@fortawesome/free-solid-svg-icons'

export default class IndividualPlacecastViewToggle extends Component {
    state = {
        isMenuSticky: false
    }

    static propTypes = {
        currentView: PropTypes.string,
        changeViewTo: PropTypes.func,
        displayExpertView: PropTypes.bool,
        isCreatePage: PropTypes.bool
    }

    static defaultProps = {
        displayExpertView: true
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    toggleOn(view) {
        return this.props.changeViewTo(view);
    }

    handleScroll = () => {
        const { isMenuSticky } = this.state;
        const { isCreatePage } = this.props;

        let scrollValue = 0;
        isCreatePage ? scrollValue = 184 : scrollValue = 52;

        if (window.scrollY >= scrollValue && !isMenuSticky) {
            this.setState({ isMenuSticky: true });
        }

        if (window.scrollY <= scrollValue && isMenuSticky) {
            this.setState({ isMenuSticky: false });
        }
    }

    render() {
        const { currentView, displayExpertView } = this.props
        const { isMenuSticky } = this.state;

        const splitPerc = displayExpertView ? '25%' : '34%';
        const streetViewElementClasses = currentView === 'street-view' ? 'is-active' : ''
        const photoElementClasses = currentView === 'photo' ? 'is-active' : ''
        const mapElementClasses = currentView === 'map' ? 'is-active' : ''
        const expertElementClasses = currentView === 'expert' ? 'is-active' : ''
        return (
            <Fragment>
                <ul 
                    className={`create-toggle-list ${isMenuSticky ? 'sticky-toggle-icons' : ''}`}
                >
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




