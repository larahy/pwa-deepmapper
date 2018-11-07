import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave, faTrashAlt, faEye} from '@fortawesome/free-solid-svg-icons'

export default class SaveOrPublishOrDeleteIcons extends React.Component {

    static propTypes = {
        onDelete: PropTypes.func,
        onSave: PropTypes.func,
        onPublish: PropTypes.func,
        isPublishable: PropTypes.bool,
        isSavable: PropTypes.bool
    }

    constructor(props) {
        super(props)
        this.onSave = this.onSave.bind(this)
        this.onPublish = this.onPublish.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    onSave(event) {
        event.preventDefault()
        this.props.onSave()
    }

    onPublish(event) {
        event.preventDefault()
        this.props.onPublish()
    }

    onDelete(event) {
        event.preventDefault()
        this.props.onDelete()
    }

    render() {
        const {isPublishable, isSavable} = this.props
        const publishButtonClasses = isPublishable ? 'create-top-button button-active' : 'create-top-button'
        const saveButtonClasses = isSavable ? 'create-top-button button-active' : 'create-top-button'
        return (
            <Fragment>
                <a className={saveButtonClasses} disabled={!isSavable} onClick={this.onSave}><span className="icon"><FontAwesomeIcon icon={faSave}/></span></a>
                <a className={publishButtonClasses}  disabled={!isPublishable}  onClick={this.onPublish}><span className="icon"><FontAwesomeIcon icon={faEye}/></span></a>
                <a className='create-top-button button-active' onClick={this.onDelete}><span className="icon"><FontAwesomeIcon icon={faTrashAlt}/></span></a>
            </Fragment>
        )
    }
}

