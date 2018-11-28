import React from 'react'
import { NavLink, HashRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import './navigation.scss'
import PropTypes from 'prop-types'

class Footer extends React.Component {
    state = {
        selectedIcon: 'home',
        isMenuActive: false
    }

    static propTypes = {
        isLoggedIn: PropTypes.bool,
        onGoHome: PropTypes.func,
        onLogout: PropTypes.func,
        onGoCreate: PropTypes.func,
        onGoMyDeepmapper: PropTypes.func
    }

    componentDidUpdate(prevProps) {
        console.log('prevProps', prevProps);
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
        const { isMenuActive } = this.state;
        const { isLoggedIn, onLogout } = this.props;

        // Clean this up and use conditional rendering as well
        const loginLogoutLink = this.props.isLoggedIn ?
            <a onClick={onLogout} className="navbar-item" activeClassName='menu selected'>Logout</a>
            :
            <NavLink onClick={this.handleToggleMenu} to='/login' className="navbar-item" activeClassName='menu selected'>Login</NavLink>

        const applicationLink = this.props.isLoggedIn ?
            null :
            <NavLink onClick={this.handleToggleMenu} to='/apply' className="navbar-item" activeClassName='menu selected'>Become an Expert</NavLink>

        return (
            <nav className='footer-navbar-container'>
                <HashRouter>
                    <ul className='footer-navbar-icons'>
                        <li>   
                            <NavLink to='/' exact activeClassName='icon-selected'>
                                <FontAwesomeIcon icon={faHome} />
                            </NavLink>
                        </li>
                        <li>
                            {isLoggedIn && 
                            <NavLink to='/create' activeClassName='icon-selected'>
                                <FontAwesomeIcon icon={faPlus} />
                            </NavLink>}
                        </li>
                        <li>
                            {isLoggedIn && 
                            <NavLink to='/my-deepmapper' activeClassName='icon-selected'>
                                <FontAwesomeIcon icon={faUser} />
                            </NavLink>}
                        </li>
                        <li 
                            className={`footer-navbar-burger ${isMenuActive? 'footer-navbar-close' : ''}`}
                            onClick={this.handleToggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </li>
                    </ul>
                </HashRouter>

                <div className={`footer-navbar-menu ${isMenuActive ? 'menu-active' : ''}`}>
                    <div className="footer-navbar-items" onClick={this.handleToggleMenu}>
                        <NavLink to='/about' className="navbar-item" activeClassName='menu selected'>About</NavLink>
                        {loginLogoutLink}
                        {applicationLink}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Footer;
