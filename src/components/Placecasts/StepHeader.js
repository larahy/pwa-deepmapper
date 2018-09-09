import React from 'react'
import PropTypes from 'prop-types';

export default class StepHeader extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onSkip: PropTypes.func
    }

    constructor () {
        super()
        this.handleSkip = this.handleSkip.bind(this)
    }

    handleSkip () {
        this.props.onSkip()
    }

    render () {
        return (
            <div>
                <h1>
                    {this.props.title}
                </h1>
                <button
                    className='button'
                    onClick={this.handleSkip}>
                    Skip
                </button>
            </div>
        )
    }
}
