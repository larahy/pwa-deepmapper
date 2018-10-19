import React, {Fragment} from 'react'
import LoginFormContainer from '../containers/Users/LoginFormContainer'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Headers} from '../constants/attributes'

export default class LoginPage extends React.Component {

    render() {
        return (
            <Fragment>
                <SimpleHeader title={Headers.LOGIN}/>
                <LoginFormContainer/>
            </Fragment>
        )
    }
}
