import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default class EditVisualsButtons extends React.Component {

    static propTypes = {
        displayEdit: PropTypes.bool,
        displaySave: PropTypes.bool,
        onEdit: PropTypes.func,
        onSave: PropTypes.func,
    }

    constructor(props) {
        super(props)
        this.onEdit = this.onEdit.bind(this)
        this.onSave = this.onSave.bind(this)
    }

    onEdit(event) {
        event.preventDefault()
        this.props.onEdit()
    }

    onSave(event) {
        event.preventDefault()
        this.props.onSave()
    }


    render() {
        const {displayEdit, displaySave} = this.props
        const editButtonClasses = displayEdit ? '' : 'is-hidden'
        const saveButtonClasses = displaySave ? '' : 'is-hidden'

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
                        className={`fas fa-save ${saveButtonClasses}`}
                        onClick={this.onSave} 
                    />
                </div>
            </div>
        )
    }
}

