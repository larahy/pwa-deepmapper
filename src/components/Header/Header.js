import React from 'react'
import './navigation.scss'
import logo from './logo.svg'

export default class Header extends React.Component {

    componentDidMount() {
        var burger = document.querySelector('.burger');
        var menu = document.querySelector('#'+burger.dataset.target);
        burger.addEventListener('click', function() {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }

    render() {
        return (
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={logo} width="40" height="40"/>
                        DEEPMAPPER
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/mapbox-map">
                            MAPBOX
                        </a>
                        <a className="navbar-item" href="/s3">
                            S3
                        </a>
                        <a className="navbar-item" href="/login">
                            LOGIN
                        </a>
                        <a className="navbar-item" href="/placecasts">
                            PLACECASTS
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="#">
                                More
                            </a>
                            <div className="navbar-dropdown is-boxed">
                                <a className="navbar-item" href="/street-view">
                                    STREETVIEW
                                </a>
                                <a className="navbar-item" href="#">
                                    BLA BLA
                                </a>
                                <a className="navbar-item" href="#">
                                    BLA
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="text" placeholder="search . . ." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

