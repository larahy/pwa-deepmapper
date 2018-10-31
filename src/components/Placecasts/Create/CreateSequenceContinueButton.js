import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

export default class CreateSequenceContinueButton extends React.Component {

    static propTypes = {
        isClickable: PropTypes.bool,
        onContinue: PropTypes.func,
    }

    constructor(props) {
        super(props)
        this.onContinue = this.onContinue.bind(this)
    }

    onContinue(event) {
        event.preventDefault()
        this.props.onContinue()
    }

    render() {
        const {isClickable} = this.props
        const buttonClasses = isClickable ? 'button is-primary' : 'button'
        return (
            <Fragment>
                <a className={buttonClasses} onClick={this.onContinue}>CONTINUE</a>
            </Fragment>
        )
    }
}

