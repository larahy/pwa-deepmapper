import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import {Headers} from '../../constants/attributes'
import './navigation.scss'


export default class HeaderWithNavigation extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onBack: PropTypes.func,
        onNext: PropTypes.func,
        readyToSubmit: PropTypes.bool,
        displayBackButton: PropTypes.bool,
        displayNextButton: PropTypes.bool
    }

    constructor() {
        super()
        this.handleBack = this.handleBack.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }

    handleBack() {
        this.props.onBack()
    }

    handleNext() {
        this.props.onNext()
    }

    render() {
        const {title, readyToSubmit, displayBackButton, displayNextButton} = this.props
        const isReviewStage = title === Headers.REVIEW
        const backButton = displayBackButton ?
            <a onClick={this.handleBack}>
                <span className="icon"><i className="fas fa-angle-left" aria-hidden="true"></i></span>
            </a> : null

        const nextButton = displayNextButton ?

            <a onClick={this.handleNext} disabled={!readyToSubmit}>
                <span className="icon"><i className="fas fa-angle-right" aria-hidden="true"></i></span>
            </a> : null

        const publishButton = isReviewStage ?
            <button onClick={this.handleNext} disabled={!readyToSubmit}>
                <span className="icon"><i className="fas fa-check" aria-hidden="true"></i></span>
            </button> : null

        return (
            <Fragment>
                <nav id="navbarTop" className="navbar has-text-centered">
                    <ul className='header-nav-container'>
                        <li>
                            <span>{backButton}</span>
                        </li>

                        <li className='header-nav-title'>
                            <p className='title is-centered'>{title}</p>
                        </li>  

                        <li>
                            <span>
                                {nextButton}
                            </span>
                            <span>
                                {publishButton}
                            </span>
                        </li>
                    </ul>
                </nav>
            </Fragment>

        )
    }
}

