import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import './navigation.scss'
import PropTypes from 'prop-types'

export default class Footer extends React.Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool,
        onGoHome: PropTypes.func,
        onLogout: PropTypes.func,
        onGoCreate: PropTypes.func,
        onGoMyDeepmapper: PropTypes.func
    }

    state = {
        selectedIcon: 'home',
        isMenuActive: false
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
            this.props.isLoggedIn 
                ? this.setState({ selectedIcon: 'user' })
                : this.setState({ selectedIcon: 'home' })
        }
    }

    handleToggleMenu = () => {
        this.setState({ 
            isMenuActive: !this.state.isMenuActive,
            selectedIcon: ''
        });
    }

    handleSelectIcon = (icon) => {
        this.setState({ selectedIcon: icon });
    }

    render() {
        const { isMenuActive, selectedIcon } = this.state;
        const { isLoggedIn, onGoHome, onGoCreate, onGoMyDeepmapper, onLogout } = this.props;

        // Clean this up and use conditional rendering as well
        const loginLogoutLink = this.props.isLoggedIn ?
            <a onClick={onLogout} className="navbar-item" activeClassName='menu selected'>Logout</a>
            :
            <NavLink onClick={this.handleHideMenuOnClick} to='/login' className="navbar-item" activeClassName='menu selected'>Login</NavLink>

        const applicationLink = this.props.isLoggedIn ?
            null :
            <NavLink onClick={this.handleHideMenuOnClick} to='/apply' className="navbar-item" activeClassName='menu selected'>Become an Expert</NavLink>

        return (
            <nav className='footer-navbar-container'>
                <ul className='footer-navbar-icons'>
                    <li
                        className={selectedIcon === 'home' ? 'icon-selected' : ''}
                        onClick={() => this.handleSelectIcon('home')}>
                        <FontAwesomeIcon 
                            icon={faHome} 
                            onClick={onGoHome} />
                    </li>
                    <li 
                        className={selectedIcon === 'create' ? 'icon-selected' : ''}
                        onClick={() => this.handleSelectIcon('create')}>
                        {isLoggedIn && 
                          <FontAwesomeIcon 
                              icon={faPlus} 
                              onClick={onGoCreate} />}
                    </li>
                    <li
                        className={selectedIcon === 'user' ? 'icon-selected' : ''}
                        onClick={() => this.handleSelectIcon('user')}>
                        {isLoggedIn &&
                            <FontAwesomeIcon 
                                icon={faUser} 
                                onClick={onGoMyDeepmapper} />}
                    </li>
                    <li 
                        className={`footer-navbar-burger ${isMenuActive? 'footer-navbar-close' : ''}`}
                        onClick={this.handleToggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                </ul>

                <div className={`footer-navbar-menu ${isMenuActive ? 'menu-active' : ''}`}>
                    <div className="footer-navbar-items" onClick={this.handleToggleMenu}>
                        <NavLink to='/about' className="navbar-item" activeClassName='menu selected'>About</NavLink>
                        {loginLogoutLink}
                        {applicationLink}
                        <NavLink to='/mapbox-map' className="navbar-item" activeClassName='menu selected'>Mapbox map</NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}

