import React from 'react'
import PropTypes from 'prop-types';
import '../components/Placecasts/styles.scss'

export default class StepHeader extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onSkip: PropTypes.func,
        onNext: PropTypes.func,
        readyToSubmit: PropTypes.bool,
        loading: PropTypes.bool
    }

    static defaultProps = {
        onSkip: () => {
        }
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
        const {title, readyToSubmit, loading} = this.props
        let skipButton
        let nextButton
        let buttonClasses
        let buttonLabelDisplayClasses
        buttonLabelDisplayClasses = !loading ? 'subtitle' : 'is-hidden'
        if (readyToSubmit && !loading) {
            buttonClasses = 'button is-small is-fullwidth is-backlit'
        } else if (readyToSubmit && loading) {
            buttonClasses = 'button is-small is-fullwidth is-backlit is-loading'
        } else {
            buttonClasses = 'button is-small is-fullwidth is-white'

        }

        skipButton = (<a className="button is-small is-fullwidth is-white skip" onClick={this.handleSkip}>
            <p className="subtitle">SKIP
                <span className="icon is-medium"><i className="fas fa-angle-right" aria-hidden="true"></i></span>
            </p>
        </a>)
        nextButton = (<a className={buttonClasses} onClick={this.handleNext} disabled={!readyToSubmit}>
            <p className={buttonLabelDisplayClasses}>
                NEXT
                <span className="icon is-medium">
                    <i className="fas fa-angle-right" aria-hidden="true"></i>
                </span>
            </p>
        </a>)

        return (

            <div className="step-header columns is-mobile is-centered">
                <div className="column step-header">
                    <a className="button is-large is-fullwidth is-white">
                        <p className="subtitle text-center">{title}</p>
                    </a>
                </div>
                <div className="column step-header">
                    {skipButton}
                    {nextButton}
                </div>
            </div>
        )
    }
}
