import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default class EditVisualsButtons extends React.Component {

    static propTypes = {
        displayEdit: PropTypes.bool,
        displaySaveOrCancel: PropTypes.bool,
        onEdit: PropTypes.func,
        onSave: PropTypes.func,
        onCancel: PropTypes.func,
    }

    constructor(props) {
        super(props)
        this.onEdit = this.onEdit.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }

    onEdit(event) {
        event.preventDefault()
        this.props.onEdit()
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
        const {displayEdit, displaySaveOrCancel} = this.props
        const editButtonClasses = displayEdit ? 'button' : 'is-hidden'
        const savOrCancelButtonClasses = displaySaveOrCancel ? 'button' : 'is-hidden'
        return (
            <Fragment>
                <a className={editButtonClasses} onClick={this.onEdit}>Edit</a>
                <a className={savOrCancelButtonClasses} onClick={this.onSave}> Save</a>
                <a className={savOrCancelButtonClasses} onClick={this.onCancel}> Cancel</a>
            </Fragment>
        )
    }
}

