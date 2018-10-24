import React, {Fragment} from 'react'
import FilterablePlacecastTiles from '../containers/FilterablePlacecastsContainer'
import {fetchDependencies} from '../helpers/fetchDependencies'
import {Headers} from '../constants/attributes'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'

let HomePage = class extends React.Component {
    static displayName = 'Home'

    render() {
        return (
            <Fragment>
                <SimpleHeader title={Headers.DEEPMAPPER}/>
                <FilterablePlacecastTiles />
            </Fragment>
        )
    }
}

HomePage = fetchDependencies([])(HomePage)

export default HomePage
