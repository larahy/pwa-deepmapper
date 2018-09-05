import React from 'react'
import './navigation.scss'
// import logo2 from './logo2.svg'

// const icon = 'M50,0C30.016,0,13.816,16.2,13.816,36.185C13.816,64.987,50,100,50,100s36.184-35.013,36.184-63.815   C86.184,16.2,69.984,0,50,0z M50,18.799l28.353,10.448L64.28,34.433c-0.579-0.646-1.448-1.011-2.368-0.919   c-0.844-4.299-8.145-6.892-10.291-6.896c-0.457-0.251-1.067-0.404-1.738-0.404c-1.413,0-2.559,0.68-2.559,1.52   c0,0.839,1.146,1.519,2.559,1.519c0.682,0,1.302-0.159,1.761-0.417c2.101,0.006,8.05,3.087,8.276,5.824   c-0.326,0.45-0.519,0.997-0.533,1.577L50,39.695L21.648,29.247L50,18.799z M68.131,46.872c0,0-8.314,5.736-18.572,5.736   c-10.257,0-18.572-5.736-18.572-5.736V34.571L50,41.578l9.903-3.649c0.185,0.261,0.412,0.485,0.671,0.668   c0.091,1.343,0.299,6.971,0.4,7.666c0.051,0.342,0.259,0.637,0.574,0.862l0.531-4.072l0.745,4.53   c0.345,0.042,0.719,0.04,1.104-0.018c1.493-0.22,2.59-1.161,2.451-2.101c-0.106-0.722-1.646-6.583-1.862-7.59   c0.35-0.518,0.527-1.154,0.469-1.818l3.145-1.159V46.872z'
// const pinStyle = {
//     cursor: 'pointer',
//     fill: '#FFE77C',
// };

export default class Header extends React.Component {

    componentDidMount() {
        var burger = document.querySelector('.burger');
        var menu = document.querySelector('#' + burger.dataset.target);
        burger.addEventListener('click', function () {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        {/*<img src={logo2} width="75" height="75"/>*/}
                        {/*<svg height="75" viewBox='0 0 100 125' style={pinStyle}>*/}
                        {/*<g>*/}
                        {/*<path d={icon}/>*/}
                        {/*</g>*/}
                        {/*</svg>*/}
                        DEEPMAPPER
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item" href="/about">
                            About
                        </a>
                        <a className="navbar-item" href="/become-an-expert">
                            Become an expert
                        </a>
                        <a className="navbar-item" href="/login">
                            Login
                        </a>
                        {/*<a className="navbar-item" href="/placecasts">*/}
                        {/*PLACECASTS*/}
                        {/*</a>*/}
                        {/*<a className="navbar-item" href="/mapbox-map">*/}
                        {/*MAPBOX*/}
                        {/*</a>*/}
                        {/*<a className="navbar-item" href="/record">*/}
                        {/*RECORD*/}
                        {/*</a>*/}
                        {/*<a className="navbar-item" href="/s3">*/}
                        {/*S3*/}
                        {/*</a>*/}
                    </div>
                </div>
            </nav>
        )
    }
}

