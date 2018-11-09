import React from 'react'
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
        const editButtonClasses = displayEdit ? '' : 'is-hidden'
        const savOrCancelButtonClasses = displaySaveOrCancel ? '' : 'is-hidden'

        return (
            <div className='photo-edit-icons'>
                <div className='overlay-icon'>
                    <i 
                        className={`fas fa-pen ${editButtonClasses}`} 
                        onClick={this.onEdit} 
                    />
                </div>
                <div className='overlay-icon'>
                    <i 
                        className={`fas fa-save ${savOrCancelButtonClasses}`} 
                        onClick={this.onSave} 
                    />
                </div>
                <div className='overlay-icon'>
                    <i 
                        className={`fas fa-times ${savOrCancelButtonClasses}`} 
                        onClick={this.onCancel} 
                    />
                </div>
            </div>
        )
    }
}

