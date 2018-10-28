import React, {Fragment} from 'react'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Headers} from '../constants/attributes'
import FilterablePlacecastTiles from '../containers/FilterablePlacecastsContainer'
import MyDeepmapperFeedViewToggleContainer from '../containers/Experts/MyDeepmapperFeedViewToggleContainer'

export default class MyDeepmapperPage extends React.Component {

    render() {
        return (
            <Fragment>
                <SimpleHeader title={Headers.MY_DEEPMAPPER}/>
                <MyDeepmapperFeedViewToggleContainer />
                <FilterablePlacecastTiles filtered={true} />
            </Fragment>
        )
    }
}