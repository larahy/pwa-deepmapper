import React from 'react'
import PropTypes from 'prop-types';
import './styles.scss'
import NotifyingInput from '../../containers/Shared/NotifyingInput'
import {Scopes, Tags, Validations} from '../../constants/attributes'

export default class InfoFields extends React.Component {
    static propTypes = {
        onNext: PropTypes.func
    }

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateInfo = (e) => {
        e.preventDefault()
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onNext()
    }


    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <NotifyingInput
                    name='title'
                    description='title'
                    type='text'
                    placeholder='Type Placecast Title'
                    validations={[
                        {name: Validations.MANDATORY}
                    ]}
                    scope={Scopes.CREATE}
                    tags={[Tags.INFO]}
                    helperText='Title is compulsory'
                />
            </form>
        )
    }


}
