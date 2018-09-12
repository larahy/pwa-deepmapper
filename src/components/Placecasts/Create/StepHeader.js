import React from 'react'
import PropTypes from 'prop-types';
import '../styles.scss'

export default class StepHeader extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onSkip: PropTypes.func,
        onNext: PropTypes.func,
        readyToSubmit: PropTypes.bool
    }

    constructor() {
        super()
        this.handleSkip = this.handleSkip.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }

    handleSkip() {
        this.props.onSkip()
    }

    handleNext() {
        this.props.onNext()
    }

    render() {
        const buttonClasses = this.props.readyToSubmit ? 'button is-small is-fullwidth is-backlit' : 'button is-small is-fullwidth is-white'
        return (

            <div className="step-header columns is-mobile is-centered">
                <div className="column step-header">
                    <p className="subtitle text-center">{this.props.title}</p>
                </div>
                <div className="column step-header">
                    <a className="button is-small is-fullwidth is-white skip" onClick={this.handleSkip}>
                        <p className="subtitle">
                            SKIP
                            <span className="icon is-medium">
                                <i className="fas fa-angle-right" aria-hidden="true">
                                </i>
                            </span>
                        </p>
                    </a>

                    <a className={buttonClasses} onClick={this.handleNext} disabled={!this.props.readyToSubmit}>
                        <p className="subtitle">
                            NEXT
                            <span className="icon is-medium">
                                <i className="fas fa-angle-right" aria-hidden="true">
                                </i>
                            </span>
                        </p>
                    </a>
                </div>
            </div>
        )
    }
}
