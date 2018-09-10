import React from 'react'
import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons'
import {faFingerprint, faGlobe} from '@fortawesome/free-solid-svg-icons'
import './navigation.scss'

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="columns is-mobile">
                    <div className="column left-icon">
                        <Link to="/create/photo">
                            <span className="icon is-large"><FontAwesomeIcon icon={faPlusSquare}/></span>
                        </Link>
                    </div>
                    <div className="column middle-icon">
                        <a>
                            <span className="icon is-large"><FontAwesomeIcon icon={faFingerprint}/></span>
                        </a>
                    </div>
                    <div className="column right-icon">
                        <a>
                            <span className="icon is-large"><FontAwesomeIcon icon={faGlobe}/></span>
                        </a>
                    </div>
                </div>
            </footer>

        )
    }
}
