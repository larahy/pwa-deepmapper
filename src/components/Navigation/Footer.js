import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import './navigation.scss'
import PropTypes from 'prop-types'

export default class Footer extends React.Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool,
        onGoHome: PropTypes.func,
        onLogout: PropTypes.func,
        onGoCreate: PropTypes.func
    }

    state = {
        menuIcons: ['faHome', 'faPlus', 'faUser'],
        isMenuActive: false
    }

    handleToggleMenu = () => {
        this.setState({ isMenuActive: !this.state.isMenuActive });
    }

    handleLogout = () => {
        this.props.onLogout();
    }

    render() {
        const { isMenuActive } = this.state;
        const { isLoggedIn, onGoHome, onGoCreate } = this.props;

        // const createIcon = this.props.isLoggedIn ?
        //     <a className="navbar-item" onClick={this.handleGoCreate}>
        //         <span className="icon is-large"><FontAwesomeIcon icon={faPlus}/></span>
        //     </a> : null
        // const myDeepmapperIcon = this.props.isLoggedIn ?
        //     <Link to="/my-deepmapper" className="navbar-item">
        //         <span className="icon is-large"><FontAwesomeIcon icon={faUser}/></span>
        //     </Link> : null
        const loginLogoutLink = this.props.isLoggedIn ?
            <a onClick={this.handleLogout} className="navbar-item" activeClassName='menu selected'>Logout</a>
            :
            <NavLink onClick={this.handleHideMenuOnClick} to='/login' className="navbar-item" activeClassName='menu selected'>Login</NavLink>


        const applicationLink = this.props.isLoggedIn ?
            null :
            <NavLink onClick={this.handleHideMenuOnClick} to='/apply' className="navbar-item" activeClassName='menu selected'>Become an Expert</NavLink>

        return (
            <nav className='footer-navbar-container'>
                <ul className='footer-navbar-icons'>
                    <li>
                        <FontAwesomeIcon 
                            icon={faHome} 
                            onClick={onGoHome} />
                    </li>
                    <li>
                        {isLoggedIn && 
                          <FontAwesomeIcon 
                              icon={faPlus} 
                              onClick={onGoCreate} />}
                    </li>
                    <li>
                        {isLoggedIn &&
                          <Link to="/my-deepmapper">
                              <FontAwesomeIcon icon={faUser} />
                          </Link>}
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

