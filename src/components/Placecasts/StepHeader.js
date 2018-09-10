import React from 'react'
import PropTypes from 'prop-types';
import './styles.scss'

export default class StepHeader extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onSkip: PropTypes.func,
        onNext: PropTypes.func,
        enableNextButton: PropTypes.bool
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

        return (
            <div className="step-header columns is-mobile is-centered">
                <div className="column step-header">
                    <p className="subtitle text-center">{this.props.title}</p>
                </div>
                <div className="column step-header">
                    <aside className="menu">
                        <ul className="menu-list">
                            <li className="text-center skip">
                                <a className="subtitle" onClick={this.handleSkip}>
                                    SKIP
                                    <span className="icon is-medium">
                                        <i className="fas fa-angle-right" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </li>
                            <li className='text-center'>
                                <button className="subtitle" onClick={this.handleNext} disabled={!this.props.enableNextButton}>
                                    NEXT
                                    <span className="icon is-medium">
                                        <i className="fas fa-angle-right" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        )
    }
}
