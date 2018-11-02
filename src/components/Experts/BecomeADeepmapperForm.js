import React from 'react'
import PropTypes from 'prop-types'

import {Validations, Scopes, Fields} from '../../constants/attributes'
import NotifyingInput from '../../containers/Shared/NotifyingInput'
import NotifyingTextArea from '../../containers/Shared/NotifyingTextArea'

import './experts.scss';

export default class BecomeADeepmapperForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        this.props.onSubmit()
        event.preventDefault()
    }

    render() {
        return (

            <form className='form' onSubmit={this.handleSubmit} noValidate>
                <div>
                    <NotifyingInput
                        name={Fields.FIRST_NAME}
                        description={Fields.FIRST_NAME}
                        shortDescription='First Name'
                        placeholder={Fields.FIRST_NAME}
                        type='text'
                        validations={[
                            {name: Validations.MANDATORY},
                        ]}
                        scope={Scopes.APPLICATION}
                    />
                    <NotifyingInput
                        name={Fields.LAST_NAME}
                        description={Fields.LAST_NAME}
                        shortDescription='Last Name'
                        placeholder={Fields.LAST_NAME}
                        type='text'
                        validations={[
                            {name: Validations.MANDATORY},
                        ]}
                        scope={Scopes.APPLICATION}
                    />
                    <NotifyingInput
                        name={Fields.EMAIL}
                        description={Fields.EMAIL}
                        shortDescription='Email'
                        type={Fields.EMAIL}
                        placeholder={Fields.EMAIL}
                        validations={[
                            {name: Validations.MANDATORY},
                            // {name: Validations.EMAIL}
                        ]}
                        scope={Scopes.APPLICATION}
                    />
                    <NotifyingInput
                        name={Fields.PASSWORD}
                        description={Fields.PASSWORD}
                        shortDescription={Fields.PASSWORD}
                        placeholder={Fields.PASSWORD}
                        type={Fields.PASSWORD}
                        validations={[{name: Validations.MANDATORY}]}
                        scope={Scopes.APPLICATION}
                    />
                    <NotifyingTextArea
                        name={Fields.BIO}
                        description={Fields.BIO}
                        shortDescription='Write something about you...'
                        placeholder={Fields.BIO}
                        type='text'
                        validations={[
                            {name: Validations.MANDATORY},
                        ]}
                        scope={Scopes.APPLICATION}
                    />
                </div>

                <button type='submit' className='button form-btn'>
                    SUBMIT
                </button>

            </form>

        )
    }
}
