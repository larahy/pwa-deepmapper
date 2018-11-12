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
        onGoCreate: PropTypes.func
    }

    componentDidMount() {
        // var burger = document.querySelector('.burger');
        // var menu = document.querySelector('#' + burger.dataset.target);
        // burger.addEventListener('click', function () {
        //     burger.classList.toggle('is-active');
        //     menu.classList.toggle('is-active');
        // });
    }

    handleHideMenuOnClick = () => {
        var burger = document.querySelector('.burger');
        var menu = document.querySelector('#' + burger.dataset.target);
        
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
    }

    // Remove this
    handleGoHome = () => {
        this.props.onGoHome()
    }

    handleGoCreate = () => {
        this.props.onGoCreate()
    }

    render() {
        const createIcon = this.props.isLoggedIn ?
            <a className="navbar-item" onClick={this.handleGoCreate}>
                <span className="icon is-large"><FontAwesomeIcon icon={faPlus}/></span>
            </a> : null
        const myDeepmapperIcon = this.props.isLoggedIn ?
            <Link to="/my-deepmapper" className="navbar-item">
                <span className="icon is-large"><FontAwesomeIcon icon={faUser}/></span>
            </Link> : null
        return (

            // <nav id="navbarBottom" className="navbar is-fixed-bottom has-shadow footer">
            //     <div className="navbar-brand">
            //         <a className="navbar-item" onClick={this.handleGoHome}>
            //             <span className="icon is-large"><FontAwesomeIcon icon={faHome}/></span>
            //         </a>
            //         {createIcon}
            //         {myDeepmapperIcon}
            //         <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            //             <span></span>
            //             <span></span>
            //             <span></span>
            //         </div>
            //     </div>

            //     <div id="navbarExampleTransparentExample" className="navbar-menu">
            //         <div className="navbar-end">
            //             <NavLink onClick={this.handleHideMenuOnClick} to='/about' className="navbar-item" activeClassName='menu selected'>About</NavLink>
            //             <NavLink onClick={this.handleHideMenuOnClick} to='/login' className="navbar-item" activeClassName='menu selected'>Login</NavLink>
            //             <NavLink onClick={this.handleHideMenuOnClick} to='/apply' className="navbar-item" activeClassName='menu selected'>Become an Expert</NavLink>
            //             <NavLink onClick={this.handleHideMenuOnClick} to='/mapbox-map' className="navbar-item" activeClassName='menu selected'>Mapbox map</NavLink>
            //         </div>
            //     </div>
            // </nav>

            <nav className='footer-navbar-container'>
                <ul className='footer-navbar-icons'>
                    <li>
                        <FontAwesomeIcon icon={faHome}/>
                    </li>
                    <li>
                        {createIcon}
                    </li>
                    <li>
                        {myDeepmapperIcon}
                    </li>
                    {/* <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> */}
                </ul>
                <div className='footer-navbar-burger'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-end">
                        <NavLink onClick={this.handleHideMenuOnClick} to='/about' className="navbar-item" activeClassName='menu selected'>About</NavLink>
                        <NavLink onClick={this.handleHideMenuOnClick} to='/login' className="navbar-item" activeClassName='menu selected'>Login</NavLink>
                        <NavLink onClick={this.handleHideMenuOnClick} to='/apply' className="navbar-item" activeClassName='menu selected'>Become an Expert</NavLink>
                        <NavLink onClick={this.handleHideMenuOnClick} to='/mapbox-map' className="navbar-item" activeClassName='menu selected'>Mapbox map</NavLink>
                    </div>
                </div>
            </nav>

        )
    }
}

