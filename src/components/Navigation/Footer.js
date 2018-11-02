import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faPlus, faUser} from '@fortawesome/free-solid-svg-icons'
import './navigation.scss'
import PropTypes from 'prop-types'

export default class Footer extends React.Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool,
        onGoHome: PropTypes.func
    }

    constructor() {
        super()
        this.handleGoHome = this.handleGoHome.bind(this)
    }

    componentDidMount() {
        var burger = document.querySelector('.burger');
        var menu = document.querySelector('#' + burger.dataset.target);
        burger.addEventListener('click', function () {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }

    handleGoHome() {
        this.props.onGoHome()
    }

    render() {
        const createIcon = this.props.isLoggedIn ?
            <Link to="/create" className="navbar-item">
                <span className="icon is-large"><FontAwesomeIcon icon={faPlus}/></span>
            </Link> : null
        const myDeepmapperIcon = this.props.isLoggedIn ?
            <Link to="/my-deepmapper" className="navbar-item">
                <span className="icon is-large"><FontAwesomeIcon icon={faUser}/></span>
            </Link> : null
        return (

            <nav id="navbarBottom" className="navbar is-fixed-bottom has-shadow footer">

                <div className="navbar-brand">
                    <a className="navbar-item" onClick={this.handleGoHome}>
                        <span className="icon is-large"><FontAwesomeIcon icon={faHome}/></span>
                    </a>
                    {createIcon}
                    {myDeepmapperIcon}
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-end">

                        <NavLink to='/about' className="navbar-item" activeClassName='menu selected'>About</NavLink>
                        <NavLink to='/login' className="navbar-item" activeClassName='menu selected'>Login</NavLink>
                        <NavLink to='/apply' className="navbar-item" activeClassName='menu selected'>Become anExpert</NavLink>
                        <NavLink to='/placecasts' className="navbar-item" activeClassName='menu selected'>PLACECASTS</NavLink>
                    </div>
                </div>
            </nav>

        )
    }
}

