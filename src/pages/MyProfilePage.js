import React, {Fragment} from 'react'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Headers} from '../constants/attributes'
import MyProfileContainer from '../containers/Users/MyProfileContainer'

export default class MyProfilePage extends React.Component {

    render() {
        return (
            <Fragment>
                <SimpleHeader title={Headers.MY_DEEPMAPPER}/>
                <MyProfileContainer />
            </Fragment>
        )
    }
}