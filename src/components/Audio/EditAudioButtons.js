import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import '../Placecasts/styles.scss'

export default class EditAudioButtons extends React.Component {

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
            <Fragment>
                <div className='audio-player-buttons'>
                    <i 
                        className={`fas fa-pen ${editButtonClasses}`} 
                        onClick={this.onEdit} 
                    />
                    <i 
                        className={`fas fa-save ${savOrCancelButtonClasses}`} 
                        onClick={this.onSave} 
                    />
                    <i 
                        className={`fas fa-times ${savOrCancelButtonClasses}`} 
                        onClick={this.onCancel} 
                    />
                </div>
            </Fragment>
        )
    }
}

