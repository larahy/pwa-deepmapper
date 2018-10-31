import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default class SaveOrCancelButtons extends React.Component {

    static propTypes = {
        displaySelf: PropTypes.bool,
        onSave: PropTypes.func,
        onCancel: PropTypes.func,
    }

    constructor(props) {
        super(props)
        this.onSave = this.onSave.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }

    onSave(event) {
        event.preventDefault()
        this.props.onSave()
    }

    onCancel(event) {
        event.preventDefault()
        this.props.onCancel()
    }

    render() {
        const {displaySelf} = this.props
        const buttonClasses = displaySelf ? 'button' : 'is-hidden'
        return (
            <Fragment>
                <a className={buttonClasses} onClick={this.onSave}> Save</a>
                <a className={buttonClasses} onClick={this.onCancel}> Cancel</a>
            </Fragment>
        )
    }
}

