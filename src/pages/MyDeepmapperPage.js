import React, {Fragment} from 'react'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Headers} from '../constants/attributes'
import MyDeepmapperContainer from '../containers/Experts/MyDeepmapperContainer'

export default class MyDeepmapperPage extends React.Component {

    render() {
        return (
            <Fragment>
                <SimpleHeader title={Headers.MY_DEEPMAPPER}/>
                <MyDeepmapperContainer />
            </Fragment>
        )
    }
}