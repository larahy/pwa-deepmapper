import React from 'react'
import PropTypes from 'prop-types'

import {Validations, Scopes, InputTypes} from '../../constants/attributes'
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
                        name={InputTypes.EMAIL}
                        description={InputTypes.EMAIL}
                        shortDescription='email address'
                        type={InputTypes.EMAIL}
                        placeholder={InputTypes.EMAIL}
                        validations={[
                            {name: Validations.MANDATORY},
                            // {name: Validations.EMAIL}
                        ]}
                        scope={Scopes.LOGIN}
                    />
                    <NotifyingInput
                        name={InputTypes.PASSWORD}
                        description={InputTypes.PASSWORD}
                        shortDescription={InputTypes.PASSWORD}
                        placeholder={InputTypes.PASSWORD}
                        type={InputTypes.PASSWORD}
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
