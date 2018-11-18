import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faListUl, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

export default class HomepageFeedViewToggle extends Component {
    state = {
        isMenuSticky: false
    }

    static propTypes = {
        currentView: PropTypes.string,
        changeHomepageFeedViewTo: PropTypes.func,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    toggleOn(view) {
        return this.props.changeHomepageFeedViewTo(view);
    }

    handleScroll = () => {
        const { isMenuSticky } = this.state;

        if (window.scrollY >= 52 && !isMenuSticky) {
            this.setState({ isMenuSticky: true });
        }

        if (window.scrollY <= 52 && isMenuSticky) {
            this.setState({ isMenuSticky: false });
        }
    }

    render() {
        const { currentView } = this.props;
        const { isMenuSticky } = this.state;

        const mapElementClasses = currentView === 'map' ? 'active-toggle' : '';
        const listElementClasses = currentView === 'list' ? 'active-toggle' : '';

        return (
            <Fragment>
                <div className={`home-icons ${isMenuSticky ? 'sticky-home-icons' : ''}`}>
                    <div 
                        className={`list-icon ${listElementClasses}`} 
                        onClick={() => this.toggleOn('list')}
                    >
                        <span>
                            <FontAwesomeIcon icon={faListUl}/>
                        </span>
                    </div>
                    <div 
                        className={`map-icon ${mapElementClasses}`} 
                        onClick={() => this.toggleOn('map')}
                    >
                        <span>
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        </span>
                    </div>
                </div>
            </Fragment>
        );
    }
}
