import React, {Fragment} from 'react'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Headers} from '../constants/attributes'
import FilterablePlacecastTiles from '../containers/FilterablePlacecastsContainer'

export default class MyDeepmapperPage extends React.Component {

    render() {
        return (
            <Fragment>
                <SimpleHeader title={Headers.MY_DEEPMAPPER}/>
                <FilterablePlacecastTiles filtered={true} />
            </Fragment>
        )
    }
}