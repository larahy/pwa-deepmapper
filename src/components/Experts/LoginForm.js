import React from 'react'
import PropTypes from 'prop-types'

import {Validations, Scopes, Fields} from '../../constants/attributes'
import NotifyingInput from '../../containers/Shared/NotifyingInput'

export default class LoginForm extends React.Component {
    static propTypes = {
        onLogin: PropTypes.func
    }

    static defaultProps = {
        onLogin: () => {
        }
    }

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        this.props.onLogin()
        event.preventDefault()
    }

    render() {
        return (

            <form className='form' onSubmit={this.handleSubmit} noValidate>
                <div>
                    <NotifyingInput
                        name={Fields.EMAIL}
                        description={Fields.EMAIL}
                        shortDescription='email address'
                        type={Fields.EMAIL}
                        placeholder={Fields.EMAIL}
                        validations={[
                            {name: Validations.MANDATORY},
                            // {name: Validations.EMAIL}
                        ]}
                        scope={Scopes.LOGIN}
                    />
                    <NotifyingInput
                        name={Fields.PASSWORD}
                        description={Fields.PASSWORD}
                        shortDescription={Fields.PASSWORD}
                        placeholder={Fields.PASSWORD}
                        type={Fields.PASSWORD}
                        validations={[{name: Validations.MANDATORY}]}
                        scope={Scopes.LOGIN}
                    />
                </div>

                <button type='submit' className='button'>
                    Login
                </button>

            </form>

        )
    }
}
