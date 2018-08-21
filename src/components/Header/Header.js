import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './navigation.scss'
import logo from './logo.svg'

export default class Header extends React.Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach(el => {
                    el.addEventListener('click', () => {

                        // Get the target from the "data-target" attribute
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);

                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');

                    });
                });
            }

        });
    }

    render() {
        return (
            <header>
                <nav id="navbar" className="navbar has-shadow is-spaced">
                    <div className="container is-fluid">

                        {/*NAVBAR BRAND*/}
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item">
                                <img src={logo} width="44" height="44"/>
                                DEEPMAPPER
                            </Link>

                            <div id="navbarBurger" className="navbar-burger burger" data-target="navMenuDocumentation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        {/*NAVBAR MENU - hidden on touch devices less than 1024px, need to add modifier className is-active to display it*/}
                        <div id="navMenuDocumentation" className="navbar-menu">
                            {/*NAVBAR RIGHT*/}
                            <div className="navbar-start">

                                <NavLink to='/street-view' className="navbar-item" activeClassName='menu selected'>STREET
                                    VIEW</NavLink>
                                <NavLink to='/s3' className="navbar-item" activeClassName='menu selected'>S3</NavLink>
                                <NavLink to='/placecasts' className="navbar-item" activeClassName='menu selected'>PLACECASTS</NavLink>
                                <NavLink to='/mapbox-map' className="navbar-item" activeClassName='menu selected'>MAPBOX</NavLink>

                                <div className="navbar-item has-dropdown is-hoverable">

                                    <a className="navbar-link" href="">
                                        DROPDOWN
                                    </a>

                                    <div id="moreDropdown" className="navbar-dropdown">

                                        <a className="navbar-item " href="">
                                            CAT
                                        </a>
                                        <a className="navbar-item " href=""><span><strong>SAT</strong></span></a>
                                        <a className="navbar-item " href=""><span><strong>on</strong></span></a>
                                        <a className="navbar-item " href=""><span><strong>mat</strong></span></a>
                                    </div>
                                </div>
                            </div>

                            {/*NAVBAR LEFT*/}

                            <div className="navbar-end">

                                <div className="navbar-item">
                                    <div className="field is-grouped is-grouped-multiline">
                                        <p className="control">
                                            <a className="button" href="" target="_blank">
                                                <img src={logo} width="30" height="30"/>
                                                <strong>BUTTON</strong>
                                            </a>

                                        </p>
                                        <p className="control">
                                            <a className="button is-primary" href="">
                                                <strong>BUTTON</strong>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

