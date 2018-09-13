import React from 'react'
import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faPlusSquare, faUser} from '@fortawesome/free-regular-svg-icons'
import {faHome, faUser, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import './navigation.scss'

export default class Footer extends React.Component {

    render() {
        return (
            <nav id="navbarBottom" className="navbar is-fixed-bottom has-shadow footer">
                <div className="columns is-mobile">
                    <div className="column left-icon">
                        <Link to="/create/info">
                            <span className="icon is-large"><FontAwesomeIcon icon={faPlusSquare}/></span>
                        </Link>
                    </div>
                    <div className="column middle-icon">
                        <a>
                            <span className="icon is-large"><FontAwesomeIcon icon={faUser}/></span>
                        </a>
                    </div>
                    <div className="column right-icon">
                        <a>
                            <span className="icon is-large"><FontAwesomeIcon icon={faHome}/></span>
                        </a>
                    </div>
                </div>
            </nav>

        )
    }
}

