import React from 'react'
import PropTypes from 'prop-types'

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
        const publishButtonClasses = isPublishable ? 'button-active' : ''
        const saveButtonClasses = isSavable ? 'button-active' : ''
        return (
            <div className='placecast-options-menu'>
                <p 
                    className={saveButtonClasses} 
                    disabled={!isSavable} 
                    onClick={this.onSave}
                >
                  Save
                </p>
                <p 
                    className={publishButtonClasses}  
                    disabled={!isPublishable}  
                    onClick={this.onPublish}
                >
                  Publish
                </p>
                <p 
                    className='button-active' 
                    onClick={this.onDelete}
                >
                  Delete
                </p>
            </div>
        )
    }
}

