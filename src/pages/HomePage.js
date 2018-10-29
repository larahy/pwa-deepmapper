import React, {Fragment} from 'react'
import FilterablePlacecastTiles from '../containers/Placecasts/FilterablePlacecastsContainer'
import {fetchDependencies} from '../helpers/fetchDependencies'
import {Dependencies, Headers} from '../constants/attributes'
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

HomePage = fetchDependencies([
    Dependencies.EXPERTS
])(HomePage)

export default HomePage
