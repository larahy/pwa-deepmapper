import React, {Fragment} from 'react'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Headers} from '../constants/attributes'
import BecomeADeepmapperFormContainer from '../containers/Experts/BecomeADeepmapperFormContainer'

export default class BecomeADeepmapperPage extends React.Component {

    render() {
        return (
            <Fragment>
                <SimpleHeader title={Headers.BECOME_A_DEEPMAPPER}/>
                <BecomeADeepmapperFormContainer />
            </Fragment>
        )
    }
}
