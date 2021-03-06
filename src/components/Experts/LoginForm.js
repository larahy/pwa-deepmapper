import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Validations, Scopes, Fields} from '../../constants/attributes'
import NotifyingInput from '../../containers/Shared/NotifyingInput'
import Error from '../shared/Error'

export default class LoginForm extends React.Component {
    static propTypes = {
        onLogin: PropTypes.func,
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
            <Fragment>

                <form className='form login-form' onSubmit={this.handleSubmit} noValidate>
                    <div>
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
                            scope={Scopes.LOGIN}
                        />
                        <NotifyingInput
                            name={Fields.PASSWORD}
                            description={Fields.PASSWORD}
                            shortDescription='Password'
                            placeholder={Fields.PASSWORD}
                            type={Fields.PASSWORD}
                            validations={[{name: Validations.MANDATORY}]}
                            scope={Scopes.LOGIN}
                        />
                    </div>

                    <button type='submit' className='button form-btn login-btn'>
                        Login
                    </button>
                </form>
                <Error/>
            </Fragment>

        )
    }
}
