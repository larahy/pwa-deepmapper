import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import '../Placecasts/styles.scss'

export default class EditAudioButtons extends React.Component {

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
            <Fragment>
                <div className='audio-player-buttons'>
                    <i 
                        className={`fas fa-pen ${editButtonClasses}`} 
                        onClick={this.onEdit} 
                    />
                    <i 
                        className={`fas fa-trash ${binButtonClasses}`}
                        onClick={this.onCancel} 
                    />
                </div>
            </Fragment>
        )
    }
}

