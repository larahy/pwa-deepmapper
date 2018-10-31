import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

export default class SaveOrPublishOrDeleteIcons extends React.Component {

    static propTypes = {
        onDelete: PropTypes.func,
        onSave: PropTypes.func,
        onPublish: PropTypes.func,
        isPublishable: PropTypes.bool
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
        const {isPublishable} = this.props
        console.log('is publishable', isPublishable)
        const publishButtonClasses = isPublishable ? 'button is-primary' : 'button'
        return (
            <Fragment>
                <a className='button' onClick={this.onSave}> Save</a>
                <a className={publishButtonClasses} disabled={!isPublishable} onClick={this.onPublish}> Publish</a>
                <a className='button' onClick={this.onDelete}> Delete</a>
            </Fragment>
        )
    }
}

