import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default class EditPhotoButtons extends React.Component {

    static propTypes = {
        displayEdit: PropTypes.bool,
        displayBin: PropTypes.bool,
        onEdit: PropTypes.func,
        onCancel: PropTypes.func,
    }

    constructor(props) {
        super(props)
        this.onEdit = this.onEdit.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }

    onEdit(event) {
        event.preventDefault()
        this.props.onEdit()
    }

    onCancel(event) {
        event.preventDefault()
        this.props.onCancel()
    }

    render() {
        const {displayEdit, displayBin} = this.props
        const editButtonClasses = displayEdit ? '' : 'is-hidden'
        const binButtonClasses = displayBin ? '' : 'is-hidden'

        return (
            <div className='photo-edit-icons'>
                <div className='overlay-icon'>
                    <i className={`fas fa-pen ${editButtonClasses}`} onClick={this.onEdit} />
                </div>
                <div className='overlay-icon'>
                    <i className={`fas fa-times ${binButtonClasses}`} onClick={this.onCancel} />
                </div>
            </div>
        )
    }
}

